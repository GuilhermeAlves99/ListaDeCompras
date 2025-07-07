## Como rodar o projeto

Este projeto foi desenvolvido com a framework **React Native** para fins de estudo e aprendizado, utilizando a plataforma **Expo** para maior facilidade de testes visuais (uma vez que, com o expo é possível rodar o app tanto no Android quanto IOS)
e **Typescript** como linguagem principal. Por conta disso, é necessário ter alguns recursos instalados para rodar localmente, aos quais citarei abaixo.
### Requisitos

1. **Node.js**  
   - Faça o download e instale a versão LTS:   https://nodejs.org/

2. **Interface de linha de comando do Expo**  
   - Você **não precisa instalar o Expo CLI globalmente**.
   - Em vez disso, use o comando `npx`, que executa a versão mais recente do Expo sem precisar instalar nada:
     ```bash
     npx expo start
     ```
   - Essa é a forma **oficialmente recomendada** pelo time do Expo, pois evita conflitos de versão e garante que você sempre use a versão mais atual da ferramenta.
   - Caso prefira a instalação global (não recomendado), use:
     ```bash
     npm install -g expo-cli
     ```

3. **Expo Go (aplicativo mobile)**  
   - No seu celular, instale o aplicativo **Expo Go**:
     - [Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)
     - [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)

4. **Editor de código**  
   - Recomendado: [Visual Studio Code](https://code.visualstudio.com/)

---

### Clonando o projeto

Abra o terminal e execute:

```bash
git clone https://github.com/GuilhermeAlves99/ListaDeCompras.git
cd ListaDeCompras
