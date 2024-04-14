import Validator from "../validator";

test('Проверка на ошибки в имени пользователя', () => {

    expect((new Validator('_Mikhail_')).validateUsername()).toEqual(false);
    expect((new Validator('123Mikhail789')).validateUsername()).toEqual(false);
    expect((new Validator('-Mikhail-')).validateUsername()).toEqual(false);
    expect((new Validator('Mikhail_')).validateUsername()).toEqual(false);
    expect((new Validator('Mikhail789')).validateUsername()).toEqual(false);
    expect((new Validator('Mikhail-')).validateUsername()).toEqual(false);
   expect((new Validator('_Mikhail')).validateUsername()).toEqual(false);
    expect((new Validator('123Mikhail')).validateUsername()).toEqual(false);
    expect((new Validator('-Mikhail')).validateUsername()).toEqual(false);
    expect((new Validator('Mikh123ail')).validateUsername()).toEqual(false);
});

test('Проверка на правильность имени пользователя', () => {

    expect((new Validator('Mikhail')).validateUsername()).toEqual(true);
    expect((new Validator('Mikh45ail')).validateUsername()).toEqual(true);
    expect((new Validator('Mikh-ail')).validateUsername()).toEqual(true);
    expect((new Validator('Mikh_ail')).validateUsername()).toEqual(true);
    expect((new Validator('Mi4k45h7ail')).validateUsername()).toEqual(true);
    expect((new Validator('Mi12k45h78ail')).validateUsername()).toEqual(true);
    expect((new Validator('M12L')).validateUsername()).toEqual(true);
    expect((new Validator('M')).validateUsername()).toEqual(true);
});