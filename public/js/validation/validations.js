'use strict';

var validation = {
  name: {
    fn: function (value) {
      return (/^([\ \\áÁ\\àÀ\\ãÃ\\âÂ\\éÉ\\èÈ\\êÊ\\íÍ\\ìÌ\\óÓ\\òÒ\\õÕ\\ôÔ\\úÚ\\ùÙ\\çÇaA-zZ]+)?$/).test(value) && !((/([_\'\^\~\´\`]+)/).test(value)) || !value;
    },
    msg: 'Nomde inválido'
  },
  phone: {
    fn: function (value) {
      return (/^([0-9]{8,12})+$/).test(value) || !value;
    },
    msg: 'Telefone inválido'
  },
  email: {
    fn: function (value) {
      return (/^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/).test(value) || !value;
    },
    msg: 'Email inválido'
  },
  numeric: {
    fn: function (value) {
      return (/^([0-9]+)$/).test(value) || !value;
    },
    msg: 'Numero inválido'
  }
};

if ( !this.hasOwnProperty('window') ) {
  exports.validation = validation;
}