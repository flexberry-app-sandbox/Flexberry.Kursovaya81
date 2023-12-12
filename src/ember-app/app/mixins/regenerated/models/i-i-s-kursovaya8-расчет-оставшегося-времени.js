import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  расторжениеДоговора: DS.belongsTo('i-i-s-kursovaya8-расторжение-договора', { inverse: null, async: false }),
  оказаниеКонсультаций: DS.hasMany('i-i-s-kursovaya8-оказание-консультаций', { inverse: 'расчетОставшегосяВремени', async: false })
});

export let ValidationRules = {
  доступно: {
    descriptionKey: 'models.i-i-s-kursovaya8-расчет-оставшегося-времени.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-kursovaya8-расчет-оставшегося-времени.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расторжениеДоговора: {
    descriptionKey: 'models.i-i-s-kursovaya8-расчет-оставшегося-времени.validations.расторжениеДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеКонсультаций: {
    descriptionKey: 'models.i-i-s-kursovaya8-расчет-оставшегося-времени.validations.оказаниеКонсультаций.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОставшегосяВремениE', 'i-i-s-kursovaya8-расчет-оставшегося-времени', {
    использовано: attr('Использовано', { index: 0 }),
    доступно: attr('Доступно', { index: 1 })
  });

  modelClass.defineProjection('РасчетОставшегосяВремениL', 'i-i-s-kursovaya8-расчет-оставшегося-времени', {
    использовано: attr('Использовано', { index: 0 }),
    доступно: attr('Доступно', { index: 1 })
  });
};
