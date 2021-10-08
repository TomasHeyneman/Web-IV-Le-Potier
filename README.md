# 2021-karine-TomasHeyneman




## Student

**Naam:** Tomas Heyneman

**Klas:** 2B1

**Academiejaar:** 2020-2021



## Uitleg Le Potier

Le Potier is een webapplicatie die een soort webshop is voor keramiek. De gebruiker logt zich in na eventueel een nieuw account aangemaakt te hebben om toegang te krijgen tot de webapplicatie. De bedoeling is dat hij is de keramiek producten is bekijkt, filtert en eventueel toevoegt aan winkelmandje. De admin, ceramicmaster, kan keramiek objecten toevoegen en verwijderen. Ik denk dat ik de meeste dingen hebben voor een webshop, maar ik had nog extra zaken willen toevoegen als ik meer tijd had. 

## Extra technologie
Voor mijn extra technologie heb ik het inladen van images gekozen. Dit doe ik via de wwwroot en een img folder in de backend en haal ik deze op via een url in de frontend. 
Naast dat heb ik ook geprobeerd om een soort translate functie in mijn app te verwerken. Een Json file in de frontend wordt bewaard en wanneer de gebruiker op een taal klikt zal er een vertaling van het Nederlands naar Engels zijn.Deze vertaling is opgeslagen in een json file in de frontend. Dit staat niet optimaal op punt aangezien ik niet voor elke zin in de app een overeenkomstige vertaling heb.

## Backend

[HIER](https://github.com/Web-IV/2021-karine-TomasHeyneman/tree/main/Server/Api) 

**Credentials**

| Username | Password |
| :---: | :---:|
| ceramicmaster@hogent.com | P@ssword1111 |
| tomasH@hogent.be | P@ssword4321 |

**Swagger**


[Swagger Ceramic App](https://github.com/Web-IV/2021-karine-TomasHeyneman/blob/main/Server/Img/Swagger.png "Swagger printout")



## Requirements opdracht
- [x] een werkende web applicatie
- [x] Angular 9 front end
- [x] .NET Core backend met swagger
- [x] Loginsysteem
- [x] minstens 4 API calls(naast de login / register)
- [x] best practices toepassen
- [x] backend routes afschermen
- [x] minstens 4 components
- [x] minstens 1 form (reactive) met validatie
- [x] minstens 2 modules
- [x] routing met minstens 2 pagina’s
- [x] responsive en een minimum aan stijl
- [x] regelmatige commits in git (één of een paar commits helemaal op het einde wordt niet aanvaard) gepusht, )
- [x] minstens één ‘extra’ technologie die niet aan bod kwam in de cursus (zie verder voor voorbeelden)
- [x] een aantal (uniten/of e2e) testen
- [x] goede README.md’s op de github repositories
- [x] een volledig en tijdig ingediend dossier(zie verder voor de vereisten)


---

## Structuur applicatie
- *Modules:* 
  * RoutingModule
  * KeramiekModule
  * UserModule
  * **GEEN** MaterialModule gebruikt maar **bootstrap**
  * AppModule

- *Componenten*
   * ShoppingCartComponent
   * AboutMeComponent
   * AddKeramiekComponent
   * CartComponent
   * CartItemComponent
   * KeramiekComponent
   * KeramiekDetailComponent
   * KeramiekFormComponent
   * KeramiekListComponent
   * LoginComponent
   * RegisterComponent
    

- *Dataservices:* 
  * CartDataService
  * KeramiekDataService
  * MessengerService
  * AuthenticationService

- *Models:*
  * CartItemModel
  * KeramiekModel
