
var Validator = {
      // default operators

      /**
       * Checks if string isn't empty, null, or undefined
       * @str {String} The string to check
       * @return {Boolean} True if the string isn't empty, null, or undefined.
       * Returns False otherwise.
       */
      nullOrEmpty: (str) => { return str && str != ""; },

      /**
       * Checks if string isn't composed of white space only
       * @str {String} The string to check
       * @return {Boolean} True if the string isn't composed of white space only.
       * Returns False otherwise.
       */
      whiteSpace: (str) => { return str.trim().length > 0; },

      /**
       * Checks if string isn't null, empty or white space
       * @str {String} The string to check
       * @return {Boolean} True if the string isn't null, empty or white space.
       * Returns False otherwise.
       */
      present: (str) => { return Validator.nullOrEmpty(str) && Validator.whiteSpace(str); },

      /**
       * Checks if string is alphabetic
       * @str {String} The string to check
       * @return {Boolean} True if the string is alphabetic.
       * Returns False otherwise.
       */
      alpha: (str) => { return /^[a-zA-Z()]+$/.test(str); },

      /**
       * Checks if string is alphabetic (allows spaces)
       * @str {String} The string to check
       * @return {Boolean} True if the string is alphabetic (allows spaces).
       * Returns False otherwise.
       */
      alphaSpace: (str) => { return /^[a-zA-Z() ]+$/.test(str) && Validator.whiteSpace(str); },

      /**
       * Checks if string is numeric
       * @str {String} The string to check
       * @return {Boolean} True if the string is numeric.
       * Returns False otherwise.
       */
      numeric: (str) => { return /^\d+$/.test(str); },

      /**
       * Checks if string is a hex string
       * @str {String} The string to check
       * @return {Boolean} True if the string is a hex string.
       * Returns False otherwise.
       */
      hex: (str) => { return /^[a-f0-9]+$/i.test(str); },

      /**
       * Checks if string is a binary string
       * @str {String} The string to check
       * @return {Boolean} True if the string is a hex string.
       * Returns False otherwise.
       */
      binary: (str) => { return /^[01]+$/i.test(str); },

      /**
       * Checks if string is alphabetic, numeric, or both
       * @str {String} The string to check
       * @return {Boolean} True if the string is alphabetic, numeric, or both
       * Returns False otherwise.
       */
      alphaNum: (str) => { return /^([0-9a-zA-Z]+)$/i.test(str); },

      /**
       * Checks if string coantains at least one alphabetic character and one number.
       * (Only alphabetic or only numbers isn't allowed)
       * @str {String} The string to check
       * @return {Boolean} True if the string coantains at least one alphabetic character and one number.
       * Returns False otherwise.
       */
      alphaNumStrict: (str) => { return /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i.test(str); },

      /**
       * Checks if string is a valid email address
       * @str {String} The string to check
       * @return {Boolean} True if the string is a valid email address
       * Returns False otherwise.
       */
      email: (str) => { return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(str);},
};

export default Validator;
