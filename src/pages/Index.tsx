import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { animeDatabase, AnimeData } from '@/data/animeDatabase';
import { useState, useMemo } from 'react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    animeDatabase.forEach(anime => {
      anime.genre.forEach(g => genres.add(g));
    });
    return Array.from(genres).sort();
  }, []);

  const filteredAndSortedAnime = useMemo(() => {
    let filtered = animeDatabase.filter(anime => {
      const matchesSearch = anime.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          anime.englishName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || anime.genre.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.year - a.year;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [searchQuery, selectedGenre, sortBy]);

  const paginatedAnime = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedAnime.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedAnime, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSortedAnime.length / itemsPerPage);

  const articles = [
    { title: "Топ 10 аниме зимнего сезона 2024", author: "Юки", comments: 23, likes: 147, date: "2 дня назад" },
    { title: "Обзор последней серии Атака Титанов", author: "Хиро", comments: 45, likes: 289, date: "1 день назад" },
    { title: "Почему студия MAPPA меняет аниме-индустрию", author: "Сакура", comments: 67, likes: 412, date: "3 дня назад" },
    { title: "Анализ персонажей в Магической битве", author: "Рен", comments: 34, likes: 198, date: "4 дня назад" },
  ];

  const forumTopics = [
    { title: "Обсуждение новых релизов весна 2024", replies: 156, views: 2341, lastPost: "5 мин назад", author: "OtakuMaster" },
    { title: "Лучшие аниме для новичков", replies: 89, views: 1847, lastPost: "1 час назад", author: "AnimeFan" },
    { title: "Теории о финале Атаки Титанов", replies: 203, views: 4521, lastPost: "30 мин назад", author: "TitanTheory" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sakura-50 to-sky-100 font-noto">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-sakura-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Cherry" className="h-8 w-8 text-sakura-200" />
              <h1 className="text-2xl font-bold text-gray-900">AnimeHub</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-sakura-200 transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-sakura-200 transition-colors">Рейтинги</a>
              <a href="#" className="text-gray-700 hover:text-sakura-200 transition-colors">Статьи</a>
              <a href="#" className="text-gray-700 hover:text-sakura-200 transition-colors">Форум</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Войти</Button>
              <Button className="bg-sakura-200 hover:bg-sakura-300" size="sm">Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Добро пожаловать в мир аниме
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Обсуждайте любимые аниме, читайте обзоры, делитесь мнениями и находите новых друзей в нашем сообществе
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-sakura-100 to-sakura-50 border-sakura-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Icon name="BookOpen" className="h-10 w-10 text-sakura-200" />
                  <div>
                    <h3 className="font-semibold text-lg">1,247</h3>
                    <p className="text-gray-600">Статей</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-sky-100 to-sky-50 border-sky-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Users" className="h-10 w-10 text-sky-500" />
                  <div>
                    <h3 className="font-semibold text-lg">45,892</h3>
                    <p className="text-gray-600">Участников</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-sakura-100 to-sky-100 border-sakura-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Icon name="MessageCircle" className="h-10 w-10 text-sakura-200" />
                  <div>
                    <h3 className="font-semibold text-lg">23,451</h3>
                    <p className="text-gray-600">Обсуждений</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="ratings" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="ratings">Топ рейтинги</TabsTrigger>
            <TabsTrigger value="articles">Статьи</TabsTrigger>
            <TabsTrigger value="forum">Форум</TabsTrigger>
            <TabsTrigger value="reviews">Обзоры</TabsTrigger>
          </TabsList>

          {/* Top Ratings */}
          <TabsContent value="ratings" className="animate-fade-in">
            {/* Фильтры и поиск */}
            <div className="mb-6 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Поиск аниме..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Жанр" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все жанры</SelectItem>
                    {allGenres.map(genre => (
                      <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="year">По году</SelectItem>
                    <SelectItem value="name">По названию</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Найдено: {filteredAndSortedAnime.length} аниме</span>
                <span>Страница {currentPage} из {totalPages}</span>
              </div>
            </div>

            {/* Список аниме */}
            <div className="grid lg:grid-cols-2 gap-4 mb-6">
              {paginatedAnime.map((anime, index) => (
                <Card key={anime.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img 
                          src={anime.image} 
                          alt={anime.name}
                          className="w-12 h-16 object-cover rounded-lg"
                        />
                        <div className="absolute -top-2 -left-2 bg-sakura-200 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base text-gray-900 group-hover:text-sakura-200 transition-colors truncate">
                          {anime.name}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">{anime.englishName}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          {anime.genre.slice(0, 2).map(genre => (
                            <Badge key={genre} variant="secondary" className="text-xs">{genre}</Badge>
                          ))}
                          <Badge variant={anime.status === 'Завершён' ? 'default' : 'outline'} className="text-xs">
                            {anime.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center">
                            <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="font-semibold">{anime.rating}</span>
                          </div>
                          <div className="text-sm text-gray-500">
                            {anime.year} • {anime.episodes} эп.
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Пагинация */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <Icon name="ChevronLeft" className="h-4 w-4" />
                  Назад
                </Button>
                
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = currentPage <= 3 ? i + 1 : 
                               currentPage >= totalPages - 2 ? totalPages - 4 + i :
                               currentPage - 2 + i;
                    
                    if (page < 1 || page > totalPages) return null;
                    
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    );
                  })}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Вперёд
                  <Icon name="ChevronRight" className="h-4 w-4" />
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Articles */}
          <TabsContent value="articles" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-sakura-200 transition-colors cursor-pointer">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{article.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm text-gray-600">
                          <p>{article.author}</p>
                          <p>{article.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" className="h-4 w-4" />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" className="h-4 w-4" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Forum */}
          <TabsContent value="forum" className="animate-fade-in">
            <div className="space-y-4">
              {forumTopics.map((topic, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 hover:text-sakura-200 transition-colors cursor-pointer">
                          {topic.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span>от {topic.author}</span>
                          <span>{topic.lastPost}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="text-center">
                          <div className="font-semibold">{topic.replies}</div>
                          <div>ответов</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">{topic.views}</div>
                          <div>просмотров</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews */}
          <TabsContent value="reviews" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Обзор: Магическая битва S2</span>
                    <div className="flex items-center">
                      <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>9.2</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Второй сезон превзошёл все ожидания. Анимация студии MAPPA на высочайшем уровне...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Автор: Кайто</span>
                    <Button variant="outline" size="sm">Читать полностью</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Первые впечатления: Фрирен</span>
                    <div className="flex items-center">
                      <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>8.8</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Удивительная история о путешествии эльфа, который переживает своих друзей...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Автор: Мидзуки</span>
                    <Button variant="outline" size="sm">Читать полностью</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cherry" className="h-6 w-6 text-sakura-200" />
                <span className="font-bold text-lg">AnimeHub</span>
              </div>
              <p className="text-gray-600">Лучшее сообщество для любителей аниме</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Разделы</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-sakura-200 transition-colors">Рейтинги</a></li>
                <li><a href="#" className="hover:text-sakura-200 transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-sakura-200 transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-sakura-200 transition-colors">Обзоры</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Сообщество</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-sakura-200 transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-sakura-200 transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-sakura-200 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                <Icon name="Twitter" className="h-5 w-5 text-gray-400 hover:text-sakura-200 transition-colors cursor-pointer" />
                <Icon name="Instagram" className="h-5 w-5 text-gray-400 hover:text-sakura-200 transition-colors cursor-pointer" />
                <Icon name="Youtube" className="h-5 w-5 text-gray-400 hover:text-sakura-200 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 AnimeHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;