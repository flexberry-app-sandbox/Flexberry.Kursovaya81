import {
  defineNamespace,
  defineProjections,
  Model as ДиректорОтделаПоРаботеСКлиентамиMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДиректорОтделаПоРаботеСКлиентамиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
