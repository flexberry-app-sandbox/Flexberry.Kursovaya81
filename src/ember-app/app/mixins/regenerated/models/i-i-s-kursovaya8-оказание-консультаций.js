import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсультации: DS.attr('number'),
  дата: DS.attr('date'),
  предоставленнаяУслуга: DS.attr('i-i-s-kursovaya8-услуга'),
  расчетОставшегосяВремени: DS.belongsTo('i-i-s-kursovaya8-расчет-оставшегося-времени', { inverse: 'оказаниеКонсультаций', async: false })
});

export let ValidationRules = {
  времяКонсультации: {
    descriptionKey: 'models.i-i-s-kursovaya8-оказание-консультаций.validations.времяКонсультации.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya8-оказание-консультаций.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  предоставленнаяУслуга: {
    descriptionKey: 'models.i-i-s-kursovaya8-оказание-консультаций.validations.предоставленнаяУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетОставшегосяВремени: {
    descriptionKey: 'models.i-i-s-kursovaya8-оказание-консультаций.validations.расчетОставшегосяВремени.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказаниеКонсультацийE', 'i-i-s-kursovaya8-оказание-консультаций', {
    дата: attr('Дата', { index: 0 }),
    времяКонсультации: attr('Время консультации', { index: 1 }),
    предоставленнаяУслуга: attr('Предоставленная услуга', { index: 2 })
  });

  modelClass.defineProjection('ОказаниеКонсультацийL', 'i-i-s-kursovaya8-оказание-консультаций', {
    дата: attr('Дата', { index: 0 }),
    времяКонсультации: attr('Время консультации', { index: 1 }),
    предоставленнаяУслуга: attr('Предоставленная услуга', { index: 2 })
  });
};
