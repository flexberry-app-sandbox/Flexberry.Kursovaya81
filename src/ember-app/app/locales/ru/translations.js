import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya8ДиректорОтделаПоРаботеСКлиентамиLForm from './forms/i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-l';
import IISKursovaya8ЗаключениеДоговораLForm from './forms/i-i-s-kursovaya8-заключение-договора-l';
import IISKursovaya8КлиентLForm from './forms/i-i-s-kursovaya8-клиент-l';
import IISKursovaya8РасторжениеДоговораLForm from './forms/i-i-s-kursovaya8-расторжение-договора-l';
import IISKursovaya8РасчетОставшегосяВремениLForm from './forms/i-i-s-kursovaya8-расчет-оставшегося-времени-l';
import IISKursovaya8ДиректорОтделаПоРаботеСКлиентамиEForm from './forms/i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-e';
import IISKursovaya8ЗаключениеДоговораEForm from './forms/i-i-s-kursovaya8-заключение-договора-e';
import IISKursovaya8КлиентEForm from './forms/i-i-s-kursovaya8-клиент-e';
import IISKursovaya8РасторжениеДоговораEForm from './forms/i-i-s-kursovaya8-расторжение-договора-e';
import IISKursovaya8РасчетОставшегосяВремениEForm from './forms/i-i-s-kursovaya8-расчет-оставшегося-времени-e';
import IISKursovaya8ДиректорОтделаПоРаботеСКлиентамиModel from './models/i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами';
import IISKursovaya8ЗаключениеДоговораModel from './models/i-i-s-kursovaya8-заключение-договора';
import IISKursovaya8КлиентModel from './models/i-i-s-kursovaya8-клиент';
import IISKursovaya8ОказаниеКонсультацийModel from './models/i-i-s-kursovaya8-оказание-консультаций';
import IISKursovaya8РасторжениеДоговораModel from './models/i-i-s-kursovaya8-расторжение-договора';
import IISKursovaya8РасчетОставшегосяВремениModel from './models/i-i-s-kursovaya8-расчет-оставшегося-времени';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами': IISKursovaya8ДиректорОтделаПоРаботеСКлиентамиModel,
    'i-i-s-kursovaya8-заключение-договора': IISKursovaya8ЗаключениеДоговораModel,
    'i-i-s-kursovaya8-клиент': IISKursovaya8КлиентModel,
    'i-i-s-kursovaya8-оказание-консультаций': IISKursovaya8ОказаниеКонсультацийModel,
    'i-i-s-kursovaya8-расторжение-договора': IISKursovaya8РасторжениеДоговораModel,
    'i-i-s-kursovaya8-расчет-оставшегося-времени': IISKursovaya8РасчетОставшегосяВремениModel
  },

  'application-name': 'Kursovaya8',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya8',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya8',
          title: 'Kursovaya8'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kursovaya8: {
          caption: 'Kursovaya8',
          title: 'Kursovaya8',
          'i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-l': {
            caption: 'Директор отдела по работе с клиентами',
            title: ''
          },
          'i-i-s-kursovaya8-расторжение-договора-l': {
            caption: 'Расторжение договора',
            title: ''
          },
          'i-i-s-kursovaya8-заключение-договора-l': {
            caption: 'Заключение договора',
            title: ''
          },
          'i-i-s-kursovaya8-расчет-оставшегося-времени-l': {
            caption: 'Расчет оставшегося времени',
            title: ''
          },
          'i-i-s-kursovaya8-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-l': IISKursovaya8ДиректорОтделаПоРаботеСКлиентамиLForm,
    'i-i-s-kursovaya8-заключение-договора-l': IISKursovaya8ЗаключениеДоговораLForm,
    'i-i-s-kursovaya8-клиент-l': IISKursovaya8КлиентLForm,
    'i-i-s-kursovaya8-расторжение-договора-l': IISKursovaya8РасторжениеДоговораLForm,
    'i-i-s-kursovaya8-расчет-оставшегося-времени-l': IISKursovaya8РасчетОставшегосяВремениLForm,
    'i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-e': IISKursovaya8ДиректорОтделаПоРаботеСКлиентамиEForm,
    'i-i-s-kursovaya8-заключение-договора-e': IISKursovaya8ЗаключениеДоговораEForm,
    'i-i-s-kursovaya8-клиент-e': IISKursovaya8КлиентEForm,
    'i-i-s-kursovaya8-расторжение-договора-e': IISKursovaya8РасторжениеДоговораEForm,
    'i-i-s-kursovaya8-расчет-оставшегося-времени-e': IISKursovaya8РасчетОставшегосяВремениEForm
  },

});

export default translations;
