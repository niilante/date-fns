// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('fr locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 0))) === 'janv.')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 1))) === 'févr.')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 2))) === 'mars')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2015, 3))) === 'avr.')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 4))) === 'mai')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 5))) === 'juin')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 6))) === 'juill.')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 7))) === 'août')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 8))) === 'sept.')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 9))) === 'oct.')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 10))) === 'nov.')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 11))) === 'déc.')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 0))) === 'janvier')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 1))) === 'février')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 2))) === 'mars')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2015, 3))) === 'avril')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 4))) === 'mai')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 5))) === 'juin')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 6))) === 'juillet')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 7))) === 'août')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 8))) === 'septembre')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 9))) === 'octobre')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 10))) === 'novembre')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 11))) === 'décembre')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 7))) === 'di')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 1))) === 'lu')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 2))) === 'ma')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 3))) === 'me')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 4))) === 'je')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 5))) === 've')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 6))) === 'sa')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 7))) === 'dim.')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 1))) === 'lun.')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 2))) === 'mar.')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 3))) === 'mer.')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 4))) === 'jeu.')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 5))) === 'ven.')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 6))) === 'sam.')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 7))) === 'dimanche')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 1))) === 'lundi')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 2))) === 'mardi')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 3))) === 'mercredi')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 4))) === 'jeudi')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 5))) === 'vendredi')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 6))) === 'samedi')
      })
    })

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(Date.UTC(2016, 1 /* Feb */, 11, 1))) === 'AM')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(Date.UTC(2016, 1 /* Feb */, 11, 0))) === 'AM')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(Date.UTC(2016, 1 /* Feb */, 11, 13))) === 'PM')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(Date.UTC(2016, 1 /* Feb */, 11, 12))) === 'PM')
      })
    })

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(Date.UTC(2016, 1 /* Feb */, 11, 1))) === 'am')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(Date.UTC(2016, 1 /* Feb */, 11, 0))) === 'am')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(Date.UTC(2016, 1 /* Feb */, 11, 13))) === 'pm')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(Date.UTC(2016, 1 /* Feb */, 11, 12))) === 'pm')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 12 a.m. to 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(Date.UTC(2016, 1 /* Feb */, 11, 1))) === 'du matin')
      })

      it('returns the correct string for 1-4 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(Date.UTC(2016, 1 /* Feb */, 11, 13))) === 'de l’après-midi')
      })

      it('returns the correct string for 5-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(Date.UTC(2016, 1 /* Feb */, 11, 17))) === 'du soir')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1er')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2e')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1er')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2e')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1er')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2e')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1er')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2e')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1er')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2e')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1re')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2e')
      })
    })

    describe('Do MMM & Do MMMM', function () {
      it('returns ordinal for day of month 1', function () {
        var january1st = new Date(Date.UTC(2017, 0 /* Jan */, 1))
        var formatters = {
          D: function () {
            return 1
          }
        }
        assert(buildFormatLocale().formatters.Do(january1st, formatters) === '1er')
        assert(buildFormatLocale().formatters.MMM(january1st, formatters) === 'janv.')
        assert(buildFormatLocale().formatters['Do MMM'](january1st, formatters) === '1er janv.')
        assert(buildFormatLocale().formatters.MMMM(january1st, formatters) === 'janvier')
        assert(buildFormatLocale().formatters['Do MMMM'](january1st, formatters) === '1er janvier')
      })

      it('returns cardinal for day of month other than 1', function () {
        var january2nd = new Date(Date.UTC(2017, 0 /* Jan */, 2))
        var formatters = {
          D: function () {
            return 2
          }
        }
        assert(buildFormatLocale().formatters.Do(january2nd, formatters) === '2e')
        assert(buildFormatLocale().formatters.MMM(january2nd, formatters) === 'janv.')
        assert(buildFormatLocale().formatters['Do MMM'](january2nd, formatters) === '2 janv.')
        assert(buildFormatLocale().formatters.MMMM(january2nd, formatters) === 'janvier')
        assert(buildFormatLocale().formatters['Do MMMM'](january2nd, formatters) === '2 janvier')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
