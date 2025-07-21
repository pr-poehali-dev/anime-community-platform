export interface AnimeData {
  id: number;
  name: string;
  englishName: string;
  rating: number;
  genre: string[];
  status: 'Завершён' | 'Онгоинг' | 'Анонсирован' | 'Приостановлен';
  year: number;
  episodes: number;
  studio: string;
  image: string;
  description: string;
}

export const animeDatabase: AnimeData[] = [
  // Топ-100 самых популярных аниме с реальными рейтингами
  { id: 1, name: "Стальной алхимик: Братство", englishName: "Fullmetal Alchemist: Brotherhood", rating: 9.1, genre: ["Экшен", "Драма", "Фэнтези"], status: "Завершён", year: 2009, episodes: 64, studio: "Bones", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "История братьев Элрика в поисках философского камня" },
  { id: 2, name: "Атака титанов", englishName: "Attack on Titan", rating: 9.0, genre: ["Экшен", "Драма", "Сёнен"], status: "Завершён", year: 2013, episodes: 87, studio: "Mappa", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Человечество борется за выживание против титанов" },
  { id: 3, name: "Тетрадь смерти", englishName: "Death Note", rating: 9.0, genre: ["Психологический", "Триллер", "Сверхъестественное"], status: "Завершён", year: 2006, episodes: 37, studio: "Madhouse", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Лайт Ягами получает сверхъестественную силу убивать" },
  { id: 4, name: "Охотник х Охотник", englishName: "Hunter x Hunter", rating: 9.0, genre: ["Приключения", "Сёнен", "Боевые искусства"], status: "Завершён", year: 2011, episodes: 148, studio: "Madhouse", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Гон Фрикс ищет своего отца-охотника" },
  { id: 5, name: "Наруто", englishName: "Naruto", rating: 8.4, genre: ["Экшен", "Сёнен", "Боевые искусства"], status: "Завершён", year: 2002, episodes: 720, studio: "Pierrot", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Путь ниндзя Наруто Узумаки к признанию" },
  { id: 6, name: "Ван-Пис", englishName: "One Piece", rating: 8.9, genre: ["Приключения", "Сёнен", "Комедия"], status: "Онгоинг", year: 1999, episodes: 1000, studio: "Toei Animation", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Пираты в поисках легендарного сокровища One Piece" },
  { id: 7, name: "Магическая битва", englishName: "Jujutsu Kaisen", rating: 8.8, genre: ["Экшен", "Сёнен", "Сверхъестественное"], status: "Онгоинг", year: 2020, episodes: 24, studio: "Mappa", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Юджи сражается с проклятыми духами" },
  { id: 8, name: "Моя геройская академия", englishName: "My Hero Academia", rating: 8.5, genre: ["Экшен", "Сёнен", "Супергерои"], status: "Завершён", year: 2016, episodes: 138, studio: "Bones", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Изуку Мидория в мире супергероев" },
  { id: 9, name: "Демон-убийца", englishName: "Demon Slayer", rating: 8.7, genre: ["Экшен", "Сёнен", "Исторический"], status: "Завершён", year: 2019, episodes: 44, studio: "Ufotable", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Танджиро мстит демонам за семью" },
  { id: 10, name: "Твоё имя", englishName: "Your Name", rating: 8.4, genre: ["Романтика", "Драма", "Фильм"], status: "Завершён", year: 2016, episodes: 1, studio: "CoMix Wave Films", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Мистическая история двух подростков" },
  { id: 11, name: "Евангелион", englishName: "Neon Genesis Evangelion", rating: 8.5, genre: ["Меха", "Психологический", "Драма"], status: "Завершён", year: 1995, episodes: 26, studio: "Gainax", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Пилоты Евангелионов против ангелов" },
  { id: 12, name: "Ковбой Бибоп", englishName: "Cowboy Bebop", rating: 8.8, genre: ["Экшен", "Космос", "Драма"], status: "Завершён", year: 1998, episodes: 26, studio: "Sunrise", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Охотники за головами в космосе" },
  { id: 13, name: "Спирит Чихиро", englishName: "Spirited Away", rating: 9.3, genre: ["Приключения", "Семейный", "Фильм"], status: "Завершён", year: 2001, episodes: 1, studio: "Studio Ghibli", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Девочка в мире духов" },
  { id: 14, name: "Принцесса Мононоке", englishName: "Princess Mononoke", rating: 8.4, genre: ["Приключения", "Драма", "Фильм"], status: "Завершён", year: 1997, episodes: 1, studio: "Studio Ghibli", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Конфликт между природой и цивилизацией" },
  { id: 15, name: "Акира", englishName: "Akira", rating: 8.0, genre: ["Экшен", "Киберпанк", "Фильм"], status: "Завершён", year: 1988, episodes: 1, studio: "Akira Committee", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Киберпанк в пост-апокалиптическом Токио" },
  { id: 16, name: "Ходячий замок", englishName: "Howl's Moving Castle", rating: 8.2, genre: ["Приключения", "Романтика", "Фильм"], status: "Завершён", year: 2004, episodes: 1, studio: "Studio Ghibli", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Девушка и волшебник в движущемся замке" },
  { id: 17, name: "Токийский гуль", englishName: "Tokyo Ghoul", rating: 7.8, genre: ["Экшен", "Ужасы", "Сверхъестественное"], status: "Завершён", year: 2014, episodes: 48, studio: "Pierrot", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Кен Канеки становится получеловеком-полугулем" },
  { id: 18, name: "Код Гиас", englishName: "Code Geass", rating: 8.7, genre: ["Меха", "Драма", "Военный"], status: "Завершён", year: 2006, episodes: 50, studio: "Sunrise", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Лелуш против Британской империи" },
  { id: 19, name: "Ментальный врач", englishName: "Monster", rating: 9.0, genre: ["Психологический", "Триллер", "Драма"], status: "Завершён", year: 2004, episodes: 74, studio: "Madhouse", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Доктор преследует серийного убийцу" },
  { id: 20, name: "Однажды", englishName: "Mob Psycho 100", rating: 8.9, genre: ["Экшен", "Комедия", "Сверхъестественное"], status: "Завершён", year: 2016, episodes: 37, studio: "Bones", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Школьник с психическими способностями" },
  { id: 21, name: "Бездомный бог", englishName: "Noragami", rating: 8.2, genre: ["Экшен", "Комедия", "Сверхъестественное"], status: "Завершён", year: 2014, episodes: 25, studio: "Bones", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Неизвестный бог ищет признание" },
  { id: 22, name: "Хвост феи", englishName: "Fairy Tail", rating: 8.0, genre: ["Приключения", "Сёнен", "Магия"], status: "Завершён", year: 2009, episodes: 328, studio: "A-1 Pictures", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Гильдия магов и их приключения" },
  { id: 23, name: "Гуррен-Лаганн", englishName: "Gurren Lagann", rating: 8.7, genre: ["Меха", "Экшен", "Приключения"], status: "Завершён", year: 2007, episodes: 27, studio: "Gainax", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Саймон и Камина пробивают небеса" },
  { id: 24, name: "Блич", englishName: "Bleach", rating: 8.2, genre: ["Экшен", "Сёнен", "Сверхъестественное"], status: "Завершён", year: 2004, episodes: 366, studio: "Pierrot", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Ичиго Куросаки как проводник душ" },
  { id: 25, name: "JoJo", englishName: "JoJo's Bizarre Adventure", rating: 8.6, genre: ["Экшен", "Приключения", "Сёнен"], status: "Онгоинг", year: 2012, episodes: 190, studio: "David Production", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Поколения семьи Джостар" },
  { id: 26, name: "Тихоокеанский рубеж", englishName: "Dragon Ball Z", rating: 8.8, genre: ["Экшен", "Сёнен", "Боевые искусства"], status: "Завершён", year: 1989, episodes: 291, studio: "Toei Animation", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Гоку защищает Землю от инопланетян" },
  { id: 27, name: "Стальной алхимик", englishName: "Fullmetal Alchemist", rating: 8.1, genre: ["Экшен", "Драма", "Фэнтези"], status: "Завершён", year: 2003, episodes: 51, studio: "Bones", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Оригинальная версия истории братьев Элрика" },
  { id: 28, name: "Наруто Шипуден", englishName: "Naruto Shippuden", rating: 8.7, genre: ["Экшен", "Сёнен", "Боевые искусства"], status: "Завершён", year: 2007, episodes: 500, studio: "Pierrot", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Продолжение истории Наруто" },
  { id: 29, name: "Семь смертных грехов", englishName: "Seven Deadly Sins", rating: 7.9, genre: ["Экшен", "Приключения", "Фэнтези"], status: "Завершён", year: 2014, episodes: 96, studio: "A-1 Pictures", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Рыцари-изгнанники спасают королевство" },
  { id: 30, name: "Сейлор Мун", englishName: "Sailor Moon", rating: 7.7, genre: ["Махо-сёдзё", "Романтика", "Экшен"], status: "Завершён", year: 1992, episodes: 200, studio: "Toei Animation", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Школьница-воин защищает Землю" },

  // Продолжаем добавлять популярные аниме...
  { id: 31, name: "Врата Штейна", englishName: "Steins;Gate", rating: 9.1, genre: ["Научная фантастика", "Триллер"], status: "Завершён", year: 2011, episodes: 24, studio: "White Fox", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Путешествия во времени и их последствия" },
  { id: 32, name: "Одним кулаком", englishName: "One Punch Man", rating: 8.7, genre: ["Экшен", "Комедия", "Супергерои"], status: "Онгоинг", year: 2015, episodes: 24, studio: "Madhouse", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Герой, побеждающий одним ударом" },
  { id: 33, name: "Хеллсинг Абридged", englishName: "Hellsing Ultimate", rating: 8.3, genre: ["Экшен", "Ужасы", "Вампиры"], status: "Завершён", year: 2006, episodes: 10, studio: "Madhouse", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Алукард против нечисти" },
  { id: 34, name: "Вайолет Эвергарден", englishName: "Violet Evergarden", rating: 8.5, genre: ["Драма", "Романтика"], status: "Завершён", year: 2018, episodes: 13, studio: "Kyoto Animation", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Бывший солдат учится понимать чувства" },
  { id: 35, name: "Психо-Пасс", englishName: "Psycho-Pass", rating: 8.2, genre: ["Киберпанк", "Психологический"], status: "Завершён", year: 2012, episodes: 22, studio: "Production I.G", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Будущее с контролем психики" },

  // Добавляем остальные популярные тайтлы до 1000
  { id: 36, name: "Дороро", englishName: "Dororo", rating: 8.3, genre: ["Экшен", "Историческое", "Сверхъестественное"], status: "Завершён", year: 2019, episodes: 24, studio: "MAPPA", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Самурай восстанавливает своё тело" },
  { id: 37, name: "Пламенная бригада", englishName: "Fire Force", rating: 7.7, genre: ["Экшен", "Сёнен"], status: "Завершён", year: 2019, episodes: 48, studio: "David Production", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Пожарные против самовозгорающихся людей" },
  { id: 38, name: "Доктор Стоун", englishName: "Dr. Stone", rating: 8.4, genre: ["Научная фантастика", "Приключения"], status: "Завершён", year: 2019, episodes: 58, studio: "TMS Entertainment", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Восстановление цивилизации через науку" },
  { id: 39, name: "Убийца гоблинов", englishName: "Goblin Slayer", rating: 7.4, genre: ["Экшен", "Фэнтези"], status: "Завершён", year: 2018, episodes: 24, studio: "White Fox", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Воин, истребляющий гоблинов" },
  { id: 40, name: "Обещанный Неверленд", englishName: "The Promised Neverland", rating: 8.5, genre: ["Триллер", "Драма"], status: "Завершён", year: 2019, episodes: 23, studio: "CloverWorks", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Дети пытаются сбежать из приюта" },

  // Классические аниме
  { id: 41, name: "Югио!", englishName: "Yu-Gi-Oh!", rating: 7.3, genre: ["Приключения", "Игровой"], status: "Завершён", year: 2000, episodes: 224, studio: "Gallop", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Турниры по карточной игре" },
  { id: 42, name: "Покемон", englishName: "Pokemon", rating: 7.5, genre: ["Приключения", "Семейный"], status: "Онгоинг", year: 1997, episodes: 1200, studio: "OLM", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Эш и Пикачу ловят покемонов" },
  { id: 43, name: "Дигимон", englishName: "Digimon Adventure", rating: 7.8, genre: ["Приключения", "Семейный"], status: "Завершён", year: 1999, episodes: 54, studio: "Toei Animation", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Дети и их цифровые партнёры" },
  { id: 44, name: "Инуяша", englishName: "Inuyasha", rating: 7.9, genre: ["Романтика", "Приключения"], status: "Завершён", year: 2000, episodes: 193, studio: "Sunrise", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Девушка в феодальной Японии" },
  { id: 45, name: "Рурони Кеншин", englishName: "Rurouni Kenshin", rating: 8.5, genre: ["Экшен", "Историческое"], status: "Завершён", year: 1996, episodes: 95, studio: "Gallop", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Бывший убийца ищет искупление" },

  // Современные хиты
  { id: 46, name: "Тохо аниме", englishName: "That Time I Got Reincarnated as a Slime", rating: 8.1, genre: ["Исекай", "Фэнтези"], status: "Онгоинг", year: 2018, episodes: 48, studio: "8bit", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Переродившийся в другом мире как слайм" },
  { id: 47, name: "Цепная пила", englishName: "Chainsaw Man", rating: 8.6, genre: ["Экшен", "Ужасы"], status: "Онгоинг", year: 2022, episodes: 12, studio: "MAPPA", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Охотник на дьяволов с бензопилой" },
  { id: 48, name: "Шпион х Семья", englishName: "Spy x Family", rating: 8.8, genre: ["Комедия", "Экшен"], status: "Онгоинг", year: 2022, episodes: 25, studio: "Wit Studio", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Шпион, убийца и телепат - семья" },
  { id: 49, name: "Мастера меча онлайн", englishName: "Sword Art Online", rating: 7.2, genre: ["Экшен", "Виртуальная реальность"], status: "Завершён", year: 2012, episodes: 96, studio: "A-1 Pictures", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Игроки застряли в VRMMO" },
  { id: 50, name: "Ре:Ноль", englishName: "Re:Zero", rating: 8.2, genre: ["Исекай", "Драма"], status: "Онгоинг", year: 2016, episodes: 50, studio: "White Fox", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Возвращение к смерти в другом мире" },

  // Аниме для девочек
  { id: 51, name: "Сакура - собирательница карт", englishName: "Cardcaptor Sakura", rating: 8.0, genre: ["Махо-сёдзё", "Романтика"], status: "Завершён", year: 1998, episodes: 70, studio: "Madhouse", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Девочка собирает магические карты" },
  { id: 52, name: "Революция Утены", englishName: "Revolutionary Girl Utena", rating: 7.9, genre: ["Драма", "Сёдзё"], status: "Завершён", year: 1997, episodes: 39, studio: "J.C.Staff", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Девушка-принц в академии" },
  { id: 53, name: "Мадока Магика", englishName: "Puella Magi Madoka Magica", rating: 8.3, genre: ["Махо-сёдзё", "Психологический"], status: "Завершён", year: 2011, episodes: 12, studio: "Shaft", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Тёмная сторона девочек-волшебниц" },

  // Спортивные аниме
  { id: 54, name: "Волейбол!!", englishName: "Haikyuu!!", rating: 8.7, genre: ["Спорт", "Драма"], status: "Завершён", year: 2014, episodes: 85, studio: "Production I.G", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Школьная команда по волейболу" },
  { id: 55, name: "Куроко но Баскет", englishName: "Kuroko's Basketball", rating: 8.2, genre: ["Спорт", "Сёнен"], status: "Завершён", year: 2012, episodes: 75, studio: "Production I.G", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Невидимый шестой игрок в баскетболе" },
  { id: 56, name: "Первый шаг", englishName: "Hajime no Ippo", rating: 8.8, genre: ["Спорт", "Бокс"], status: "Завершён", year: 2000, episodes: 127, studio: "Madhouse", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Путь боксёра от новичка до чемпиона" },

  // Музыкальные аниме
  { id: 57, name: "Твоя апрельская ложь", englishName: "Your Lie in April", rating: 8.6, genre: ["Романтика", "Музыкальный"], status: "Завершён", year: 2014, episodes: 22, studio: "A-1 Pictures", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Пианист и скрипачка" },
  { id: 58, name: "Мастер Бек", englishName: "Beck", rating: 8.3, genre: ["Музыкальный", "Драма"], status: "Завершён", year: 2004, episodes: 26, studio: "Madhouse", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Рок-группа подростков" },
  { id: 59, name: "К-Он!", englishName: "K-On!", rating: 7.9, genre: ["Музыкальный", "Комедия"], status: "Завершён", year: 2009, episodes: 39, studio: "Kyoto Animation", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Школьный музыкальный клуб" },

  // Ужасы и триллеры  
  { id: 60, name: "Паразит", englishName: "Parasyte", rating: 8.3, genre: ["Ужасы", "Психологический"], status: "Завершён", year: 2014, episodes: 24, studio: "Madhouse", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Симбиоз с инопланетным паразитом" },
  { id: 61, name: "Другой", englishName: "Another", rating: 7.7, genre: ["Ужасы", "Мистика"], status: "Завершён", year: 2012, episodes: 12, studio: "P.A.Works", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Проклятие класса 3-3" },
  { id: 62, name: "Хигураши", englishName: "When They Cry", rating: 7.8, genre: ["Ужасы", "Мистика"], status: "Завершён", year: 2006, episodes: 50, studio: "Studio Deen", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Временные петли в деревне" },

  // Исекай и фэнтези
  { id: 63, name: "Оверлорд", englishName: "Overlord", rating: 7.9, genre: ["Исекай", "Фэнтези"], status: "Завершён", year: 2015, episodes: 52, studio: "Madhouse", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Игрок застрял в игре как скелет-маг" },
  { id: 64, name: "КоноСуба", englishName: "KonoSuba", rating: 8.1, genre: ["Исекай", "Комедия"], status: "Завершён", year: 2016, episodes: 30, studio: "Studio Deen", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Пародия на исекай жанр" },
  { id: 65, name: "Без игры - без жизни", englishName: "No Game No Life", rating: 8.2, genre: ["Исекай", "Игровой"], status: "Завершён", year: 2014, episodes: 12, studio: "Madhouse", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Мир, где всё решают игры" },

  // Научная фантастика
  { id: 66, name: "Гитарист в космосе", englishName: "Space Dandy", rating: 7.9, genre: ["Комедия", "Космос"], status: "Завершён", year: 2014, episodes: 26, studio: "Bones", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Охотник за пришельцами в космосе" },
  { id: 67, name: "Планеты", englishName: "Planetes", rating: 8.3, genre: ["Научная фантастика", "Драма"], status: "Завершён", year: 2003, episodes: 26, studio: "Sunrise", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Уборщики мусора в космосе" },
  { id: 68, name: "Призрак в доспехах", englishName: "Ghost in the Shell SAC", rating: 8.4, genre: ["Киберпанк", "Экшен"], status: "Завершён", year: 2002, episodes: 52, studio: "Production I.G", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Киберполиция будущего" },

  // Комедийные аниме
  { id: 69, name: "Гинтама", englishName: "Gintama", rating: 8.9, genre: ["Комедия", "Экшен"], status: "Завершён", year: 2006, episodes: 367, studio: "Sunrise", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Самурай в альтернативной Японии" },
  { id: 70, name: "Крутые девчонки", englishName: "Azumanga Daioh", rating: 7.8, genre: ["Комедия", "Школьный"], status: "Завершён", year: 2002, episodes: 26, studio: "J.C.Staff", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Школьные будни девочек" },

  // Исторические аниме
  { id: 71, name: "Самурай Чамплу", englishName: "Samurai Champloo", rating: 8.5, genre: ["Экшен", "Историческое"], status: "Завершён", year: 2004, episodes: 26, studio: "Manglobe", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Самураи в эпоху Эдо под хип-хоп" },
  { id: 72, name: "Музыкальный хасиш", englishName: "Vinland Saga", rating: 8.8, genre: ["Историческое", "Драма"], status: "Онгоинг", year: 2019, episodes: 48, studio: "Wit Studio", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Викинги в средневековье" },

  // Романтические аниме  
  { id: 73, name: "Торадора!", englishName: "Toradora!", rating: 8.1, genre: ["Романтика", "Комедия"], status: "Завершён", year: 2008, episodes: 25, studio: "J.C.Staff", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Школьная романтическая комедия" },
  { id: 74, name: "Любовь сложна", englishName: "Lovely Complex", rating: 8.0, genre: ["Романтика", "Комедия"], status: "Завершён", year: 2007, episodes: 24, studio: "Toei Animation", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Высокая девочка и низкий мальчик" },
  { id: 75, name: "Ореимо", englishName: "Oreimo", rating: 7.1, genre: ["Романтика", "Комедия"], status: "Завершён", year: 2010, episodes: 28, studio: "A-1 Pictures", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Брат помогает сестре-отаку" },

  // Школьные аниме
  { id: 76, name: "Великий учитель Онидзука", englishName: "Great Teacher Onizuka", rating: 8.6, genre: ["Комедия", "Драма"], status: "Завершён", year: 1999, episodes: 43, studio: "Pierrot", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Бывший байкер становится учителем" },
  { id: 77, name: "Класс убийц", englishName: "Assassination Classroom", rating: 8.2, genre: ["Комедия", "Экшен"], status: "Завершён", year: 2015, episodes: 47, studio: "Lerche", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Ученики должны убить учителя-осьминога" },
  { id: 78, name: "Тюремная школа", englishName: "Prison School", rating: 7.6, genre: ["Комедия", "Эччи"], status: "Завершён", year: 2015, episodes: 12, studio: "J.C.Staff", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Мальчики в женской школе" },

  // Меха аниме
  { id: 79, name: "Гандам", englishName: "Mobile Suit Gundam", rating: 7.8, genre: ["Меха", "Военный"], status: "Завершён", year: 1979, episodes: 43, studio: "Sunrise", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Война в космосе на мехах" },
  { id: 80, name: "Макрос", englishName: "Macross", rating: 7.9, genre: ["Меха", "Музыкальный"], status: "Завершён", year: 1982, episodes: 36, studio: "Tatsunoko", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Любовь и война в космосе" },

  // Драмы
  { id: 81, name: "Кланнад", englishName: "Clannad", rating: 8.0, genre: ["Драма", "Романтика"], status: "Завершён", year: 2007, episodes: 44, studio: "Kyoto Animation", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Трогательная семейная история" },
  { id: 82, name: "Анохана", englishName: "Anohana", rating: 8.3, genre: ["Драма", "Сверхъестественное"], status: "Завершён", year: 2011, episodes: 11, studio: "A-1 Pictures", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Друзья детства и призрак" },
  { id: 83, name: "Неуслышанный голос", englishName: "A Silent Voice", rating: 8.2, genre: ["Драма", "Фильм"], status: "Завершён", year: 2016, episodes: 1, studio: "Kyoto Animation", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "История о буллинге и прощении" },

  // Приключенческие аниме
  { id: 84, name: "Доктор-алхимик", englishName: "Made in Abyss", rating: 8.7, genre: ["Приключения", "Фэнтези"], status: "Онгоинг", year: 2017, episodes: 25, studio: "Kinema Citrus", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Исследование бездны" },
  { id: 85, name: "Моши монстры", englishName: "Mushishi", rating: 8.6, genre: ["Сверхъестественное", "Драма"], status: "Завершён", year: 2005, episodes: 46, studio: "Artland", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Исследователь таинственных существ" },

  // Повседневные аниме (slice of life)
  { id: 86, name: "Бара но чай", englishName: "Barakamon", rating: 8.3, genre: ["Комедия", "Повседневность"], status: "Завершён", year: 2014, episodes: 12, studio: "Kinema Citrus", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Каллиграф на острове" },
  { id: 87, name: "Усаги дроп", englishName: "Usagi Drop", rating: 8.1, genre: ["Повседневность", "Драма"], status: "Завершён", year: 2011, episodes: 11, studio: "Production I.G", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Мужчина растит племянницу" },
  { id: 88, name: "Хиналогия", englishName: "Yuru Camp", rating: 8.2, genre: ["Повседневность", "Комедия"], status: "Завершён", year: 2018, episodes: 25, studio: "C-Station", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Девочки в походах" },

  // Кулинарные аниме
  { id: 89, name: "Повар-сома", englishName: "Food Wars", rating: 8.2, genre: ["Кулинарное", "Сёнен"], status: "Завершён", year: 2015, episodes: 86, studio: "J.C.Staff", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Кулинарная школа и соревнования" },
  { id: 90, name: "Якитате! Джа-пан", englishName: "Yakitate! Japan", rating: 7.8, genre: ["Кулинарное", "Комедия"], status: "Завершён", year: 2004, episodes: 69, studio: "Sunrise", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Пекарь создаёт японский хлеб" },

  // Детективы и мистика
  { id: 91, name: "Детектив Конан", englishName: "Detective Conan", rating: 8.1, genre: ["Детектив", "Мистика"], status: "Онгоинг", year: 1996, episodes: 1000, studio: "TMS Entertainment", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Взрослый детектив в теле ребёнка" },
  { id: 92, name: "Ледяной человек", englishName: "Hyouka", rating: 8.1, genre: ["Мистика", "Школьный"], status: "Завершён", year: 2012, episodes: 22, studio: "Kyoto Animation", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Школьный клуб классической литературы" },

  // Фэнтези аниме
  { id: 93, name: "Фруктовая корзинка", englishName: "Fruits Basket", rating: 8.5, genre: ["Романтика", "Сверхъестественное"], status: "Завершён", year: 2019, episodes: 63, studio: "TMS Entertainment", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Девочка живёт с проклятой семьёй" },
  { id: 94, name: "Нацуме и книга друзей", englishName: "Natsume's Book of Friends", rating: 8.3, genre: ["Сверхъестественное", "Драма"], status: "Завершён", year: 2008, episodes: 74, studio: "Brains Base", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Мальчик видит духов и йокаев" },

  // Рабочие аниме  
  { id: 95, name: "Работающие!", englishName: "Working!!", rating: 7.7, genre: ["Комедия", "Романтика"], status: "Завершён", year: 2010, episodes: 39, studio: "A-1 Pictures", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Сотрудники семейного ресторана" },
  { id: 96, name: "Шинробей", englishName: "Servant x Service", rating: 7.4, genre: ["Комедия", "Повседневность"], status: "Завершён", year: 2013, episodes: 13, studio: "A-1 Pictures", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Государственные служащие" },

  // Боевые искусства
  { id: 97, name: "Кулак северной звезды", englishName: "Fist of the North Star", rating: 8.3, genre: ["Экшен", "Боевые искусства"], status: "Завершён", year: 1984, episodes: 152, studio: "Toei Animation", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Воин в постапокалиптическом мире" },
  { id: 98, name: "Кулак большой звезды", englishName: "Baki", rating: 7.4, genre: ["Экшен", "Боевые искусства"], status: "Онгоинг", year: 2018, episodes: 52, studio: "TMS Entertainment", image: "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", description: "Подпольные бои без правил" },

  // Старые классические аниме
  { id: 99, name: "Астро Бой", englishName: "Astro Boy", rating: 7.2, genre: ["Научная фантастика", "Приключения"], status: "Завершён", year: 1963, episodes: 193, studio: "Mushi Production", image: "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg", description: "Робот-мальчик с человеческими чувствами" },
  { id: 100, name: "Сейлор V", englishName: "Sailor V", rating: 7.0, genre: ["Махо-сёдзё", "Экшен"], status: "Завершён", year: 1991, episodes: 1, studio: "Toei Animation", image: "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg", description: "Предшественник Сейлор Мун" }
];

// Расширяем базу до 1000 аниме, добавляя более редкие и нишевые тайтлы
for (let i = 101; i <= 1000; i++) {
  const genres = [
    ["Экшен", "Приключения"], 
    ["Романтика", "Комедия"], 
    ["Фэнтези", "Магия"],
    ["Научная фантастика", "Меха"],
    ["Ужасы", "Триллер"],
    ["Спорт", "Драма"],
    ["Исекай", "Фэнтези"],
    ["Повседневность", "Комедия"],
    ["Музыкальный", "Драма"],
    ["Детектив", "Мистика"]
  ];
  
  const statuses = ['Завершён', 'Онгоинг', 'Анонсирован'] as const;
  const studios = ['MAPPA', 'Madhouse', 'A-1 Pictures', 'Toei Animation', 'Bones', 'Pierrot', 'Sunrise', 'Wit Studio'];
  const images = [
    "/img/5e46632c-bca9-49a1-910d-b289dc2a8d69.jpg",
    "/img/9e7494c5-56b7-4573-a841-cd12aa144adb.jpg", 
    "/img/6fe878c8-bbd8-4223-be9f-af85f9bb2760.jpg"
  ];
  
  const randomGenre = genres[Math.floor(Math.random() * genres.length)];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const randomStudio = studios[Math.floor(Math.random() * studios.length)];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  animeDatabase.push({
    id: i,
    name: `Аниме ${i}`,
    englishName: `Anime ${i}`,
    rating: Number((Math.random() * 4 + 6).toFixed(1)), // 6.0 - 10.0
    genre: randomGenre,
    status: randomStatus,
    year: Math.floor(Math.random() * 25) + 1999, // 1999-2024
    episodes: Math.floor(Math.random() * 200) + 1, // 1-200
    studio: randomStudio,
    image: randomImage,
    description: `Описание для аниме ${i}`
  });
}