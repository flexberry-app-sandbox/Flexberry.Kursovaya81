import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-l');
  this.route('i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-e',
  { path: 'i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-e/:id' });
  this.route('i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-e.new',
  { path: 'i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами-e/new' });
  this.route('i-i-s-kursovaya8-заключение-договора-l');
  this.route('i-i-s-kursovaya8-заключение-договора-e',
  { path: 'i-i-s-kursovaya8-заключение-договора-e/:id' });
  this.route('i-i-s-kursovaya8-заключение-договора-e.new',
  { path: 'i-i-s-kursovaya8-заключение-договора-e/new' });
  this.route('i-i-s-kursovaya8-клиент-l');
  this.route('i-i-s-kursovaya8-клиент-e',
  { path: 'i-i-s-kursovaya8-клиент-e/:id' });
  this.route('i-i-s-kursovaya8-клиент-e.new',
  { path: 'i-i-s-kursovaya8-клиент-e/new' });
  this.route('i-i-s-kursovaya8-расторжение-договора-l');
  this.route('i-i-s-kursovaya8-расторжение-договора-e',
  { path: 'i-i-s-kursovaya8-расторжение-договора-e/:id' });
  this.route('i-i-s-kursovaya8-расторжение-договора-e.new',
  { path: 'i-i-s-kursovaya8-расторжение-договора-e/new' });
  this.route('i-i-s-kursovaya8-расчет-оставшегося-времени-l');
  this.route('i-i-s-kursovaya8-расчет-оставшегося-времени-e',
  { path: 'i-i-s-kursovaya8-расчет-оставшегося-времени-e/:id' });
  this.route('i-i-s-kursovaya8-расчет-оставшегося-времени-e.new',
  { path: 'i-i-s-kursovaya8-расчет-оставшегося-времени-e/new' });
});

export default Router;
