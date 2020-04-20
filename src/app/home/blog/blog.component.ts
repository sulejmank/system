import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/util/system-types';
import { convertDate } from 'src/app/util/system-helpers';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogItems: Blog[] = [
    {
      id: 1,
      title: 'Covid-19',
      text: 'Poštovani, shodno donetoj odluci o proglašavanju vanrednog stanja koja se  odnosi i na obrazovne institucije,'
        + 'želimo da vas obavestimo da će naša škola jezika System nastaviti sa radom i odrzavanjem isključivo online nastave'
        + 'i to pre svega iz razloga zdravstvene i društvene odgovornosti, a sve u cilju očuvanja najveće vrednosti- zdravlja,'
        + ' kako svih vas, naših polaznika, tako i  naših zaposlenih i prevencije  daljeg širenja virusa COVID-19'
        + 'creator Do tada vas molimo, da u ovim teškim trenucima svi zajedno apsolutno poštujemo dobijene'
        + 'preporuke o društveno odgovornom ponašanju i što je više moguće ostanemo u '
        + 'svojim domovima, kako bismo što pre uspeli da prebrodimo ovako ozbiljan zdravstveni izazov koji nam svima predstoji,'
        + 'uz maksimalnu solidarnost i podršku najugroženijim grupama stanovništva.'
        + 'Ostanimo u svojim domovima, ispunimo vreme izolacije kvalitetnim sadržajem, kreativnim hobijima, '
        + 'čitanjem svih onih knjiga koje nas odavno čekaju  na policama, društvenim igrama u krugu porodice,'
        + 'korisnim saznanjima i učenjem koje ce nas unaprediti a i skratiti vreme koje moramo provesti u domu, a koje će nas učiniti herojima!',
      image: 'assets/blog/blog-1.jpg',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    },
    {
      id: 2,
      title: 'Learn & Work program',
      text: 'Naša firma Vam omogućava specijalni Learn & Work program. U pitanju je program, preko kojeg možete'
        + 'Učiti a zatim stečena znanja predočiti u praksi i videti plodove svoga truda.'
        + 'Pored odličnog edukativnog sadržaja koji Vam nudimo, imate mogućnost prijave, a zatim obezbeđivanje radnog mesta,'
        + 'smeštaja i pomoć prilikom sakupljanja cele neophodne dokumentacije.'
        + 'Ovo je najbolji način da znanja koja ste stekli unapredite i dignete na veći nivo, a zatim i da ih unovčite.'
        + 'Pružite sebi priliku da preko zaradite i obogatite za novo iskustvo i avanturu!',
      image: 'assets/blog/blog-2.jpg',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    },
    {
      id: 3,
      title: 'Negovateljski poslovi',
      text: 'Ukoliko se nalazite u Nemačkoj,'
        + 'a nemate poslodavca i imate problem sa smeštajem, javite nam se. System  Vam može omogućiti brzo zaposlenje u oblasti 24-časovne nege starih lica širom Nemačke.'
        + 'Ako ste zainteresovani javite se putem našeg maila. Nakon obavljenog razgovora sa agentom iz naše firme, izrađujemo Vam dokumentaciju i apliciramo za posao. Nakon što dobijete posao, organizujemo Vam put'
        + 'Put, smeštaj i hrana su plaćeni, a minimalna neto plata je 1000 eura na mesečnom nivou.',
      image: 'assets/blog/blog-3.jpg',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    },
    {
      id: 4,
      title: 'U TOKU JE UPIS NA ONLINE  ČASOVE TURSKOG JEZIKA',
      text: 'Eveeet, organizujemo nove grupe online  učenja turskog jezika'
        + 'Obzirom da je jedan od jako primamljivih i prvih pisanih jezika, rešili smo da u našu ponudu online jezika uvrstimo '
        + 'i ovaj jezik čiji prvi natpisi su bili Orhonski natpisi (Orhun Kitabeleri) iz 8.veka, koji su sadržali oko 10000 reči.'
        + 'Ovi natpisi potiču iz doline reke Jenisej, sa prostora današnje Mongolije, i predstavljaju prvi spomenik pisan turskim jezikom. '
        + ' Osim zanimljive istorije, kulture, tu su i predivne  turističke destinacije sa  kojima se možete detaljnije upoznati učenjem turskog jezika.'
        + ' Učenje nudimo u grupama koje broje jako mali broj kandidata, polu- individualnoj ili individualnoj nastavi. Online časovi se održavaju putem Zoom aplikacije'
        + 'koju smo izabrali za Vas isključivo zbog kvaliteta koji pruža. Takodje, časovi i nastava se prilagodjavaju Vašim potrebama, pa mogu biti konverzacijski, opšti ili stručni.',
      image: 'assets/blog/blog-4.png',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    },
    {
      id: 5,
      title: 'Poslovi u ugostiteljskim objektima širom Nemačke',
      text: 'Toliko si vremena proveo učeći nemački, a sada radiš i putuješ, upoznaješ nove ljude iz raznih delova sveta i viđaš neverovatne gradove i mesta. Družiš se sa nemcima, francuzima, našima, italijanima, kinezima a još i zarađuješ visoku sumu novca na mesečom nivou.'
        + 'Nakon završene smene dogovaraš se sa kolegama, obilazite Amsterdam, Štutgard , Berlin ili Beč. Uživate u nemačkoj domaćoj kuhinji i prepričavate interesantne događaje sa posla. '
        + 'Zašto program Learn & Work Nemačka? Jer možeš da vidiš plodove svog truda! Jer možeš da podigneš poznavanje svog nemačkog jezika na novi nivo! Jer možeš da upoznaš toliko ljudi! Jer možeš da posetiš toliko mesta!',
      image: 'assets/blog/blog-5.jpg',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    }
  ];

  selectedBlog: Blog;

  ngOnInit() {
    this.selectedBlog = this.blogItems[0];
  }

  changeBlog(blog: Blog): void {
    this.selectedBlog = this.blogItems.filter(x => x.id === blog.id)[0];
  }

  get selcetedItem() {
    if (!this.selectedBlog) {
      return;
    }
    return this.selectedBlog;
  }

  get items() {
    return this.blogItems.filter(x => x.id !== this.selectedBlog.id);
  }
}
