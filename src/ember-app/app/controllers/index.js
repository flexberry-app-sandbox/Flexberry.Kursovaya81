import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya8.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya8.title'),
          children: [{
            link: 'i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-l',
            caption: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursovaya8-расторжение-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-расторжение-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-расторжение-договора-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kursovaya8-заключение-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-заключение-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-заключение-договора-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kursovaya8-расчет-оставшегося-времени-l',
            caption: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-расчет-оставшегося-времени-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-расчет-оставшегося-времени-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya8-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya8.i-i-s-kursovaya8-клиент-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})