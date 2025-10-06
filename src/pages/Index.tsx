import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      title: 'Рафинированное подсолнечное масло',
      description: 'Высококачественное масло, прошедшее полный цикл очистки. Идеально для приготовления пищи.',
      specs: ['ГОСТ 1129-2013', 'Высший сорт', 'Без запаха и вкуса']
    },
    {
      title: 'Нерафинированное подсолнечное масло',
      description: 'Натуральное масло первого отжима с сохранением полезных свойств.',
      specs: ['ГОСТ 1129-2013', 'Первый сорт', 'Насыщенный вкус и аромат']
    }
  ];

  const certificates = [
    'Сертификат соответствия ГОСТ 1129-2013',
    'Декларация о соответствии ТР ТС 024/2011',
    'Санитарно-эпидемиологическое заключение',
    'Сертификат ISO 9001:2015'
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Droplet" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">КОНТИНЕНТАЛЬНЫЕ МАСЛА</h1>
              <p className="text-xs text-muted-foreground">Производство растительных масел</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {[
              { id: 'main', label: 'Главная' },
              { id: 'products', label: 'Продукция' },
              { id: 'certificates', label: 'Сертификаты' },
              { id: 'about', label: 'О компании' },
              { id: 'contacts', label: 'Контакты' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary border-b-2 border-secondary' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button className="bg-secondary text-primary hover:bg-secondary/90 font-medium">
            Связаться с нами
          </Button>
        </div>
      </header>

      <main>
        <section id="main" className="relative bg-gradient-to-b from-muted to-background py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-primary">
                    <Icon name="Factory" size={16} />
                    Производство высшего качества
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Качественное растительное масло от производителя
                </h2>
                <p className="text-lg text-muted-foreground">
                  Группа компаний - ИП УТРОБИН Е.В., ООО "ИНТЕРФУДХИМ" является производственно-торговым 
                  предприятием, находящимся на территории Южного федерального округа.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={() => scrollToSection('products')}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Наша продукция
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => scrollToSection('certificates')}
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Сертификаты
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/5 p-8 flex items-center justify-center">
                  <Icon name="Droplet" size={200} className="text-primary opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <Icon name="Award" size={48} className="mx-auto text-secondary" />
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-white/80">Качественное сырье</p>
              </div>
              <div className="space-y-2">
                <Icon name="FileCheck" size={48} className="mx-auto text-secondary" />
                <h3 className="text-3xl font-bold">4+</h3>
                <p className="text-white/80">Сертификата качества</p>
              </div>
              <div className="space-y-2">
                <Icon name="Truck" size={48} className="mx-auto text-secondary" />
                <h3 className="text-3xl font-bold">ЮФО</h3>
                <p className="text-white/80">География поставок</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
                <Icon name="ShoppingCart" size={16} />
                Продукция
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Наша продукция
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы продаем рафинированное и нерафинированное растительное масло высшего качества
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Droplet" size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{product.title}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                    <div className="space-y-2 pt-4 border-t">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="CheckCircle" size={16} className="text-secondary" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
                <Icon name="FileCheck" size={16} />
                Документация
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Сертификаты и экспертизы
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Наш продукт сертифицирован и прошел все необходимые экспертизы
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certificates.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-secondary p-12 flex items-center justify-center">
                  <Icon name="Factory" size={150} className="text-white opacity-30" />
                </div>
              </div>

              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-primary">
                  <Icon name="Building2" size={16} />
                  О компании
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Производственно-торговое предприятие полного цикла
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Группа компаний - ИП УТРОБИН Е.В., ООО "ИНТЕРФУДХИМ" является производственно-торговым 
                    предприятием, находящимся на территории Южного федерального округа.
                  </p>
                  <p>
                    В производстве используется исключительно качественное сырье. Мы контролируем весь 
                    производственный процесс - от закупки сырья до упаковки готовой продукции.
                  </p>
                  <p>
                    Наш продукт сертифицирован и прошел все необходимые экспертизы, что гарантирует 
                    высокое качество и безопасность для потребителей.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                    <p className="text-sm font-medium">Южный федеральный округ</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Users" size={24} className="text-secondary" />
                    <p className="text-sm font-medium">Группа компаний</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Свяжитесь с нами
                </h2>
                <p className="text-white/80 text-lg">
                  Готовы ответить на ваши вопросы и обсудить условия сотрудничества
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center">
                      <Icon name="Phone" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Телефон</h3>
                      <p className="text-white/80">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center">
                      <Icon name="Mail" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <p className="text-white/80">info@continental-oil.ru</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center">
                      <Icon name="MapPin" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Адрес</h3>
                      <p className="text-white/80">Южный федеральный округ</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Droplet" size={24} />
              <span className="font-bold">КОНТИНЕНТАЛЬНЫЕ МАСЛА</span>
            </div>
            <p className="text-sm text-background/80">
              © 2024 ИП УТРОБИН Е.В., ООО "ИНТЕРФУДХИМ". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;