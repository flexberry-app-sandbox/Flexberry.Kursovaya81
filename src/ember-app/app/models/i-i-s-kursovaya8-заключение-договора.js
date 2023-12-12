import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаключениеДоговораMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya8-заключение-договора';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаключениеДоговораMixin, Validations, {
});

defineProjections(Model);

export default Model;
