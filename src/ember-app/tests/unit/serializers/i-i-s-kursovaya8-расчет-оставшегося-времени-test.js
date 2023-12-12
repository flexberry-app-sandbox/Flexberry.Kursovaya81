import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya8-расчет-оставшегося-времени', 'Unit | Serializer | i-i-s-kursovaya8-расчет-оставшегося-времени', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya8-расчет-оставшегося-времени',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya8-тип-договора',
    'transform:i-i-s-kursovaya8-услуга',

    'model:i-i-s-kursovaya8-директор-отдела-по-работе-с-клиентами',
    'model:i-i-s-kursovaya8-заключение-договора',
    'model:i-i-s-kursovaya8-клиент',
    'model:i-i-s-kursovaya8-оказание-консультаций',
    'model:i-i-s-kursovaya8-расторжение-договора',
    'model:i-i-s-kursovaya8-расчет-оставшегося-времени',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
