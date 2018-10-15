/*
 * Vanilla Form v. 2.0.0
 * Author: Michal Szepielak
 *
 * Product info and license terms:
 * http://codecanyon.net/item/vanilla-form-modern-responsive-contact-form/10447733
 */

var VanillaForm = (function (window) {
    "use strict";

    /**
     * Constructor of Vanilla Form
     * @param form {HTMLFormElement}
     * @returns {VanillaForm}
     * @constructor
     */
    var removeErrorBound = {length: 0};

    /**
     * Makes initiations by jQuery object
     * @param $formCollection
     * @returns {Array|VanillaForm} returns array of form instances or form instance if only one form was inited
     */
    function initByJQueryObject($formCollection) {
        var formInstances = [];

        $formCollection.each(function (index, element) {
            formInstances[index] = new VanillaForm(element);
        });

        if (formInstances.length <= 1) {
            return formInstances[0];
        }

        return formInstances;
    }

    /**
     * Returns pass phrase
     * @returns {string}
     */
    function getPassPhrase() {
        var token = "9320087105434084715";
        token = token.split("");
        token = token.reverse().join("");
        return token;
    }

    /**
     * Triggered when form field is focused. It's used for simple BOT prevention.
     * @param self {VanillaForm}
     */
    function onFieldFocus(self) {
        self.formFocused = true;
    }

    /**
     * Removes error highlighting from target element and cleans submit button
     * @param self {VanillaForm}
     * @param targetElement {HTMLInputElement|HTMLTextAreaElement}
     */
    function removeError(self, targetElement) {
        var els = document.querySelectorAll('[name=' + targetElement.name + ']'),
            i;

        for (i = 0; i < els.length; i++) {
            els[i].classList.remove("error");
            els[i].removeEventListener("focus", removeErrorBound[targetElement.name], false);
        }

        delete removeErrorBound[targetElement.name];
        removeErrorBound.length--;
        if (removeErrorBound.length <= 0) {
            removeErrorBound.length = 0;
            self.setSubmitState("initial");
        }
    }

    /**
     * Scrolls window to make visible target element on the screen.
     * @param element {HTMLElement}
     */
    function scrollToShowElement(element) {
        var bounding = element.getBoundingClientRect(),
            fromTop = Math.round(bounding.top) - 5,
            viewportHeight = window.innerHeight;

        if (fromTop <= 0) {
            window.scrollBy(0, fromTop);
            return;
        }

        if (fromTop >= viewportHeight) {
            window.scrollBy(0, fromTop - viewportHeight + 30);
        }
    }

    function VanillaForm(form) {
        var self = this;

        // Check if jQuery is loaded and the passed object is jQuery object
        // form should be in alternative way
        if (window.jQuery && form instanceof window.jQuery) {
            return initByJQueryObject(form);
        }

        if (!form) {
            console.warn("Couldn't bind to form element");
            return null;
        }
        self.dict = {
            "markedAsSpamError": "Your message was marked as spam and was not sent! Fix your message!",
            "markedAsSpamServerError": "Your message was marked as SPAM and was not send.",
            "sendSuccess": "We have received your inquiry. Stay tuned, we’ll get back to you very soon.",
            "sendError": "Mail server has experienced an error. Please try again.",
            "httpRequestError": "[%s] There was a problem with receiving response from mailing server",
            "timeoutError": "Your request was timeout. Please try again.",
            "parseResponseError": "Response from mailing server was unclear. Please contact administrator."
        };
        self.responseTimeout = 5000;
        self.httpRequest = null;
        self.url = form.action || location.href;
        self.form = form;
        self.processing = false;

        // Binding submit button
        self.submitButton = form.querySelector("[type=\"submit\"]");
        if (!self.submitButton) {
            console.warn("Couldn't bind to submit button");
            return null;
        }

        // Binding to notification box
        self.notificationBox = form.querySelector(".notification-box");
        if (!self.notificationBox) {
            console.warn("Couldn't bind to submit button");
            return null;
        }

        self.notificationBox.addEventListener("click", function () {
            this.classList.remove("show-error");
            this.classList.remove("show-success");
        }, false);

        // BOT prevent
        self.formFocused = false;
        self.focusBound = null;

        // Init
        self.init();
        return self;
    }

    /**
     * Logs an error
     * @param msg {string} Error message
     */
    VanillaForm.prototype.logError = function (msg) {
        this.notify(msg, "error");
    };

    /**
     * Shows notification box with given message.
     * @param message {string} Message
     * @param type {string} [type=error] - Notification type
     */
    VanillaForm.prototype.notify = function (message, type) {
        var notificationBox = this.notificationBox;

        if (!notificationBox) {
            console.warn("Notification box not found");
            return;
        }
        notificationBox.innerHTML = message;
        notificationBox.classList.add("show-" + (type || "error"));
        scrollToShowElement(notificationBox);
    };

    /**
     * Sets state to button
     * @param state {string} State of button
     */
    VanillaForm.prototype.setSubmitState = function (state) {
        var self = this,
            submit = self.submitButton,
            stateText = submit.getAttribute("data-" + state),
            className = submit.className.replace(/state-[a-z]+/ig, "");

        self.processing = state === "processing";
        submit.className = className + " state-" + state;
        submit.value = stateText;
    };

    /**
     * Validates form. Returns true if validation is ok, false otherwise.
     * Adds an "error" CSS class if some input is invalid.
     * Changes submit value text if error occurred. Error message should be in data-error attribute
     * @returns {Boolean} validation status
     */
    VanillaForm.prototype.validateForm = function () {
        var self = this,
            form = self.form,
            els = form.elements,
            secretField,
            i,
            el,
            error = false,
            formError = false,
            emailPattern = /^([\w\-]+(?:\.[\w\-]+)*)@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        // Remove errors
        for (i = els.length - 1; i >= 0; --i) {
            el = els[i];
            if (removeErrorBound[el.name]) {
                removeError(self, el);
            }
        }

        // Add new errors
        for (i = els.length - 1; i >= 0; --i) {
            el = els[i];
            error = false;

            if (el.value === "" && el.required) {
                error = true;
            } else {
                if (el.type === "checkbox" && el.required && !el.checked) {
                    error = true;
                }
                if (el.type === "email" && el.value !== "" && !emailPattern.test(el.value)) {
                    error = true;
                }

                if (el.type === "radio" && el.required) {
                    if (!document.querySelector('[name=' + el.name + ']:checked')) {
                        error = true;
                    }
                }
            }

            if (error) {
                el.classList.add("error");
                if (!removeErrorBound[el.name]) {
                    removeErrorBound[el.name] = removeError.bind(null, self, el);
                    removeErrorBound.length++;
                }
                el.addEventListener("focus", removeErrorBound[el.name], false);
                formError = true;
            } else {
                el.classList.remove("error");
            }

            if (formError) {
                self.setSubmitState("error");
            }
        }

        // Form content is ok, prepare to send
        if (!formError) {
            if (self.formFocused !== true) {
                self.logError(self.dict.markedAsSpamError);
                return false;
            }
            // Create secret field
            secretField = form.querySelector("[name=\"contact_secret\"]");
            if (!secretField) {
                secretField = document.createElement("input");
                secretField.type = "hidden";
                secretField.name = "contact_secret";
                form.appendChild(secretField);
            }
            secretField.value = getPassPhrase();
        }

        // Fix for fixed top on iPad if keyboard is hidden after submit.
        setTimeout(function () {
            window.scrollBy(0, -1);
        }, 1);
        return !formError;
    };

    VanillaForm.prototype.resetForm = function () {
        var self = this,
            formElements = self.form,
            submitButton = self.submitButton,
            tmpElement,
            i;

        for (i = formElements.length - 1; i >= 0; --i) {
            tmpElement = formElements[i];

            if (tmpElement !== submitButton) {
                tmpElement.classList.remove("success");
                tmpElement.value = "";
            }
        }
        self.setSubmitState("initial");
    };

    VanillaForm.prototype.successForm = function () {
        var self = this;
        self.setSubmitState("success");
        self.notify(self.dict.sendSuccess, "success");
    };

    VanillaForm.prototype.processResponse = function (receivedData) {
        var self = this,
            dict = self.dict,
            response;

        try {
            response = JSON.parse(receivedData);
        } catch (e) {
            console.error(e);
            response = {
                result: "ParseError"
            };
        }

        switch (response.result) {
        case "OK":
            self.successForm(dict.sendSuccess);
            setTimeout(self.resetForm.bind(self), 4000);
            break;
        case "NO_SPAM":
            self.logError(dict.markedAsSpamServerError);
            break;
        case "SEND_ERROR":
            self.logError(dict.sendError);
            self.setSubmitState("initial");
            break;
        case "ParseError":
            self.logError(dict.parseResponseError);
            break;
        }
    };

    VanillaForm.prototype.requestStateChange = function () {
        var self = this,
            httpRequest = self.httpRequest;

        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                self.processResponse(httpRequest.responseText);
            } else {
                self.setSubmitState("initial");
                // Don't log status 0, because it's received when timeout occurs
                if (httpRequest.status !== 0) {
                    self.logError(self.dict.httpRequestError.replace("%s", httpRequest.status));
                }
            }
        }
    };

    VanillaForm.prototype.init = function () {
        var self = this,
            form = self.form,
            submit = self.submitButton,
            requiredElements = form.elements,
            tmpElement,
            i;

        // Bind submit event
        form.addEventListener("submit", self.submitForm.bind(self), true);

        //Prepare httpRequest
        if (window.XMLHttpRequest) {
            self.httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject("Microsoft.XMLHTTP")) {
            self.httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }

        self.focusBound = onFieldFocus.bind(null, self);
        if (!self.httpRequest) {
            console.error("Couldn't init XMLHttpRequest");
            return null;
        }

        // BOT prevent
        self.formFocused = false;
        for (i = requiredElements.length - 1; i >= 0; --i) {
            tmpElement = requiredElements[i];
            if (tmpElement.type !== "submit") {
                tmpElement.addEventListener("focus", self.focusBound, false);
            }
        }

        // Set submit initial value
        if (submit.value !== submit.getAttribute("data-initial")) {
            submit.setAttribute("data-initial", submit.value);
            self.setSubmitState("initial");
        }
    };

    VanillaForm.prototype.send = function (formData) {
        var self = this,
            httpRequest = self.httpRequest;

        httpRequest.open("POST", self.url, true);
        httpRequest.timeout = self.responseTimeout;
        httpRequest.ontimeout = function () {
            self.logError(self.dict.timeoutError);
            self.setSubmitState("initial");
        };
        httpRequest.send(formData);
        httpRequest.onreadystatechange = self.requestStateChange.bind(self);
    };

    /**
     * Submits form
     * @param event {Event}
     * @returns {boolean}
     */
    VanillaForm.prototype.submitForm = function (event) {
        var self = this,
            formData = "";

        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Validate form
        if (self.validateForm()) {
            self.setSubmitState("processing");
            formData = new FormData(self.form);
            self.send(formData);
        }

        return false;
    };

    return VanillaForm;

//End of wrapping anonymous function
}(window));