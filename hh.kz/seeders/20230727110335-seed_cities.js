'use strict';
const Country = require('../app/region/Country')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const countries = await Country.findAll();

    const countryRows = countries;

    const citiesData = [
      // Города России
      { name: 'Москва', countryId: countryRows[0].id },
      { name: 'Санкт-Петербург', countryId: countryRows[0].id },
      { name: 'Новосибирск', countryId: countryRows[0].id },
      { name: 'Екатеринбург', countryId: countryRows[0].id },
      { name: 'Нижний Новгород', countryId: countryRows[0].id },
      { name: 'Казань', countryId: countryRows[0].id },
      { name: 'Челябинск', countryId: countryRows[0].id },
      { name: 'Омск', countryId: countryRows[0].id },
      { name: 'Самара', countryId: countryRows[0].id },
      { name: 'Ростов-на-Дону', countryId: countryRows[0].id },
      { name: 'Уфа', countryId: countryRows[0].id },
      { name: 'Красноярск', countryId: countryRows[0].id },
      { name: 'Пермь', countryId: countryRows[0].id },
      { name: 'Воронеж', countryId: countryRows[0].id },
      { name: 'Волгоград', countryId: countryRows[0].id },
      { name: 'Краснодар', countryId: countryRows[0].id },
      { name: 'Саратов', countryId: countryRows[0].id },
      { name: 'Тюмень', countryId: countryRows[0].id },
      { name: 'Тольятти', countryId: countryRows[0].id },
      { name: 'Ижевск', countryId: countryRows[0].id },
      // Города Украины
      { name: 'Киев', countryId: countryRows[1].id },
      { name: 'Харьков', countryId: countryRows[1].id },
      { name: 'Одесса', countryId: countryRows[1].id },
      { name: 'Днепр', countryId: countryRows[1].id },
      { name: 'Запорожье', countryId: countryRows[1].id },
      { name: 'Львов', countryId: countryRows[1].id },
      { name: 'Кривой Рог', countryId: countryRows[1].id },
      { name: 'Николаев', countryId: countryRows[1].id },
      { name: 'Мариуполь', countryId: countryRows[1].id },
      { name: 'Луганск', countryId: countryRows[1].id },
      { name: 'Винница', countryId: countryRows[1].id },
      { name: 'Макеевка', countryId: countryRows[1].id },
      { name: 'Севастополь', countryId: countryRows[1].id },
      { name: 'Симферополь', countryId: countryRows[1].id },
      { name: 'Херсон', countryId: countryRows[1].id },
      { name: 'Полтава', countryId: countryRows[1].id },
      { name: 'Чернигов', countryId: countryRows[1].id },
      { name: 'Черкассы', countryId: countryRows[1].id },
      { name: 'Хмельницкий', countryId: countryRows[1].id },
      { name: 'Житомир', countryId: countryRows[1].id },
      // Города Беларуси
      { name: 'Минск', countryId: countryRows[2].id },
      { name: 'Гомель', countryId: countryRows[2].id },
      { name: 'Могилев', countryId: countryRows[2].id },
      { name: 'Витебск', countryId: countryRows[2].id },
      { name: 'Гродно', countryId: countryRows[2].id },
      { name: 'Брест', countryId: countryRows[2].id },
      { name: 'Бобруйск', countryId: countryRows[2].id },
      { name: 'Барановичи', countryId: countryRows[2].id },
      { name: 'Борисов', countryId: countryRows[2].id },
      { name: 'Пинск', countryId: countryRows[2].id },
      { name: 'Орша', countryId: countryRows[2].id },
      { name: 'Мозырь', countryId: countryRows[2].id },
      { name: 'Солигорск', countryId: countryRows[2].id },
      { name: 'Новополоцк', countryId: countryRows[2].id },
      { name: 'Лида', countryId: countryRows[2].id },
      { name: 'Жлобин', countryId: countryRows[2].id },
      { name: 'Слуцк', countryId: countryRows[2].id },
      { name: 'Светлогорск', countryId: countryRows[2].id },
      { name: 'Речица', countryId: countryRows[2].id },
      { name: 'Калинковичи', countryId: countryRows[2].id },
      // Города Казахстана
      { name: 'Нур-Султан', countryId: countryRows[3].id },
      { name: 'Алматы', countryId: countryRows[3].id },
      { name: 'Шымкент', countryId: countryRows[3].id },
      { name: 'Актобе', countryId: countryRows[3].id },
      { name: 'Караганда', countryId: countryRows[3].id },
      { name: 'Тараз', countryId: countryRows[3].id },
      { name: 'Павлодар', countryId: countryRows[3].id },
      { name: 'Усть-Каменогорск', countryId: countryRows[3].id },
      { name: 'Семей', countryId: countryRows[3].id },
      { name: 'Костанай', countryId: countryRows[3].id },
      { name: 'Петропавловск', countryId: countryRows[3].id },
      { name: 'Орал', countryId: countryRows[3].id },
      { name: 'Атырау', countryId: countryRows[3].id },
      { name: 'Актау', countryId: countryRows[3].id },
      { name: 'Темиртау', countryId: countryRows[3].id },
      { name: 'Туркестан', countryId: countryRows[3].id },
      { name: 'Кокшетау', countryId: countryRows[3].id },
      { name: 'Талдыкорган', countryId: countryRows[3].id },
      { name: 'Экибастуз', countryId: countryRows[3].id },
      { name: 'Рудный', countryId: countryRows[3].id },
      // Города Узбекистана
      { name: 'Ташкент', countryId: countryRows[4].id },
      { name: 'Самарканд', countryId: countryRows[4].id },
      { name: 'Наманган', countryId: countryRows[4].id },
      { name: 'Андижан', countryId: countryRows[4].id },
      { name: 'Бухара', countryId: countryRows[4].id },
      { name: 'Карши', countryId: countryRows[4].id },
      { name: 'Нукус', countryId: countryRows[4].id },
      { name: 'Коканд', countryId: countryRows[4].id },
      { name: 'Гулистан', countryId: countryRows[4].id },
      { name: 'Чирчик', countryId: countryRows[4].id },
      { name: 'Термез', countryId: countryRows[4].id },
      { name: 'Сырдарья', countryId: countryRows[4].id },
      { name: 'Жиззах', countryId: countryRows[4].id },
      { name: 'Ургенч', countryId: countryRows[4].id },
      { name: 'Кунград', countryId: countryRows[4].id },
      { name: 'Алмалык', countryId: countryRows[4].id },
      { name: 'Фергана', countryId: countryRows[4].id },
      { name: 'Джизак', countryId: countryRows[4].id },
      { name: 'Хива', countryId: countryRows[4].id },
      { name: 'Навои', countryId: countryRows[4].id },
      // Города Грузии
      { name: 'Тбилиси', countryId: countryRows[5].id },
      { name: 'Кутаиси', countryId: countryRows[5].id },
      { name: 'Батуми', countryId: countryRows[5].id },
      { name: 'Сокуми', countryId: countryRows[5].id },
      { name: 'Зугдиди', countryId: countryRows[5].id },
      { name: 'Рустави', countryId: countryRows[5].id },
      { name: 'Гори', countryId: countryRows[5].id },
      { name: 'Поти', countryId: countryRows[5].id },
      { name: 'Сенаки', countryId: countryRows[5].id },
      { name: 'Марнеули', countryId: countryRows[5].id },
      { name: 'Рустави', countryId: countryRows[5].id },
      { name: 'Самтредиа', countryId: countryRows[5].id },
      { name: 'Цхалтубо', countryId: countryRows[5].id },
      { name: 'Сагареджо', countryId: countryRows[5].id },
      { name: 'Очамчира', countryId: countryRows[5].id },
      { name: 'Зестафони', countryId: countryRows[5].id },
      { name: 'Телави', countryId: countryRows[5].id },
      { name: 'Боржоми', countryId: countryRows[5].id },
      { name: 'Ахалцихе', countryId: countryRows[5].id },
      { name: 'Каспи', countryId: countryRows[5].id },
      // Города Туркменистана
      { name: 'Ашхабад', countryId: countryRows[6].id },
      { name: 'Туркменабат', countryId: countryRows[6].id },
      { name: 'Дашогуз', countryId: countryRows[6].id },
      { name: 'Мары', countryId: countryRows[6].id },
      { name: 'Балканабат', countryId: countryRows[6].id },
      { name: 'Тебриз', countryId: countryRows[6].id },
      { name: 'Фарраб', countryId: countryRows[6].id },
      { name: 'Каахка', countryId: countryRows[6].id },
      { name: 'Тагтабазар', countryId: countryRows[6].id },
      { name: 'Чарджоу', countryId: countryRows[6].id },
      { name: 'Аннау', countryId: countryRows[6].id },
      { name: 'Байрамали', countryId: countryRows[6].id },
      { name: 'Сердар', countryId: countryRows[6].id },
      { name: 'Безмеин', countryId: countryRows[6].id },
      { name: 'Курганджин', countryId: countryRows[6].id },
      { name: 'Сакарчаг', countryId: countryRows[6].id },
      { name: 'Мургап', countryId: countryRows[6].id },
      { name: 'Дарваза', countryId: countryRows[6].id },
      { name: 'Газачак', countryId: countryRows[6].id },
      { name: 'Гызыларбасшы', countryId: countryRows[6].id },
      // Города Таджикистана
      { name: 'Душанбе', countryId: countryRows[7].id },
      { name: 'Худжанд', countryId: countryRows[7].id },
      { name: 'Куляб', countryId: countryRows[7].id },
      { name: 'Курган-Тюбе', countryId: countryRows[7].id },
      { name: 'Исфара', countryId: countryRows[7].id },
      { name: 'Вахдат', countryId: countryRows[7].id },
      { name: 'Гафуров', countryId: countryRows[7].id },
      { name: 'Пенджикент', countryId: countryRows[7].id },
      { name: 'Истаравшан', countryId: countryRows[7].id },
      { name: 'Канибадам', countryId: countryRows[7].id },
      { name: 'Хорог', countryId: countryRows[7].id },
      { name: 'Турсунзода', countryId: countryRows[7].id },
      { name: 'Джиргаталь', countryId: countryRows[7].id },
      { name: 'Айни', countryId: countryRows[7].id },
      { name: 'Пяндж', countryId: countryRows[7].id },
      { name: 'Тавильдара', countryId: countryRows[7].id },
      { name: 'Шурчи', countryId: countryRows[7].id },
      { name: 'Нохияи Чилгазм', countryId: countryRows[7].id },
      { name: 'Комсомол', countryId: countryRows[7].id },
      { name: 'Джомбай', countryId: countryRows[7].id },
      // Города Кыргызстана
      { name: 'Бишкек', countryId: countryRows[8].id },
      { name: 'Ош', countryId: countryRows[8].id },
      { name: 'Жалал-Абад', countryId: countryRows[8].id },
      { name: 'Каракол', countryId: countryRows[8].id },
      { name: 'Талас', countryId: countryRows[8].id },
      { name: 'Нарын', countryId: countryRows[8].id },
      { name: 'Баткен', countryId: countryRows[8].id },
      { name: 'Кызыл-Кия', countryId: countryRows[8].id },
      { name: 'Токмок', countryId: countryRows[8].id },
      { name: 'Кант', countryId: countryRows[8].id },
      { name: 'Каинда', countryId: countryRows[8].id },
      { name: 'Кара-Балта', countryId: countryRows[8].id },
      { name: 'Шопоков', countryId: countryRows[8].id },
      { name: 'Талаский', countryId: countryRows[8].id },
      { name: 'Ак-Суу', countryId: countryRows[8].id },
      { name: 'Таш-Кумыр', countryId: countryRows[8].id },
      { name: 'Кара-Кульджа', countryId: countryRows[8].id },
      { name: 'Кызыл-Джар', countryId: countryRows[8].id },
      { name: 'Сокулук', countryId: countryRows[8].id },
      { name: 'Каинды', countryId: countryRows[8].id },
      // Города Молдовы
      { name: 'Кишинев', countryId: countryRows[9].id },
      { name: 'Бельцы', countryId: countryRows[9].id },
      { name: 'Тирасполь', countryId: countryRows[9].id },
      { name: 'Бендеры', countryId: countryRows[9].id },
      { name: 'Кагул', countryId: countryRows[9].id },
      { name: 'Унгены', countryId: countryRows[9].id },
      { name: 'Комрат', countryId: countryRows[9].id },
      { name: 'Дубоссары', countryId: countryRows[9].id },
      { name: 'Каушаны', countryId: countryRows[9].id },
      { name: 'Дрокия', countryId: countryRows[9].id },
      { name: 'Орхей', countryId: countryRows[9].id },
      { name: 'Калараш', countryId: countryRows[9].id },
      { name: 'Сороки', countryId: countryRows[9].id },
      { name: 'Рыбница', countryId: countryRows[9].id },
      { name: 'Страшены', countryId: countryRows[9].id },
      { name: 'Каиман', countryId: countryRows[9].id },
      { name: 'Крива', countryId: countryRows[9].id },
      { name: 'Криуляны', countryId: countryRows[9].id },
      { name: 'Бессарабка', countryId: countryRows[9].id },
      { name: 'Тараклия', countryId: countryRows[9].id },
      // Города Армении
      { name: 'Ереван', countryId: countryRows[10].id },
      { name: 'Гюмри', countryId: countryRows[10].id },
      { name: 'Ванадзор', countryId: countryRows[10].id },
      { name: 'Армавир', countryId: countryRows[10].id },
      { name: 'Капан', countryId: countryRows[10].id },
      { name: 'Гавар', countryId: countryRows[10].id },
      { name: 'Арташат', countryId: countryRows[10].id },
      { name: 'Апаран', countryId: countryRows[10].id },
      { name: 'Севан', countryId: countryRows[10].id },
      { name: 'Котайк', countryId: countryRows[10].id },
      { name: 'Вагаршапат', countryId: countryRows[10].id },
      { name: 'Масис', countryId: countryRows[10].id },
      { name: 'Варденис', countryId: countryRows[10].id },
      { name: 'Сисиан', countryId: countryRows[10].id },
      { name: 'Абовян', countryId: countryRows[10].id },
      { name: 'Арарат', countryId: countryRows[10].id },
      { name: 'Маралых', countryId: countryRows[10].id },
      { name: 'Артасхат', countryId: countryRows[10].id },
      { name: 'Аштарак', countryId: countryRows[10].id },
      { name: 'Артаик', countryId: countryRows[10].id },
      // Города Азербайджана
      { name: 'Баку', countryId: countryRows[11].id },
      { name: 'Гянджа', countryId: countryRows[11].id },
      { name: 'Сумгаит', countryId: countryRows[11].id },
      { name: 'Ленкорань', countryId: countryRows[11].id },
      { name: 'Шеки', countryId: countryRows[11].id },
      { name: 'Мингечаур', countryId: countryRows[11].id },
      { name: 'Нахичевань', countryId: countryRows[11].id },
      { name: 'Хиртон', countryId: countryRows[11].id },
      { name: 'Агдам', countryId: countryRows[11].id },
      { name: 'Агдаш', countryId: countryRows[11].id },
      { name: 'Агджабеди', countryId: countryRows[11].id },
      { name: 'Агсти', countryId: countryRows[11].id },
      { name: 'Агсу', countryId: countryRows[11].id },
      { name: 'Астара', countryId: countryRows[11].id },
      { name: 'Бабек', countryId: countryRows[11].id },
      { name: 'Балакен', countryId: countryRows[11].id },
      { name: 'Барда', countryId: countryRows[11].id },
      { name: 'Белоканы', countryId: countryRows[11].id },
      { name: 'Бильгях', countryId: countryRows[11].id },
      { name: 'Бинагади', countryId: countryRows[11].id },
      // Добавьте остальные города для каждой страны по вашему усмотрению.
    ];

    await queryInterface.bulkInsert('Cities', citiesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};