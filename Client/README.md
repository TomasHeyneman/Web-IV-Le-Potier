# Recipe API - Monolithic Repository

## Voorwaarden

- Node.js 
  - https://nodejs.org/en/
- Angular CLI 
  - `npm install -g @angular/cli`
- DotNet 5.0 
- SQL Database installed on localhost 


## Getting started -  Development

````
git clone van deze repository
````

### Client

```
cd Client
npm install
ng build
npm start
```

### Server

```
cd Server/Api
dotnet run
```

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
---
