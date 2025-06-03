# 📘 Maîtriser useEffect en React Native

Ce dépôt regroupe une série d'exemples concrets et pédagogiques en React Native illustrant **les bonnes pratiques et les pièges à éviter** avec le hook `useEffect`.

Chaque cas est présenté sous la forme :

* `WrongXxx`: une mauvaise implémentation
* `RightXxx`: la version correcte

Avec un maximum de **commentaires** dans le code pour comprendre pourquoi un code est bon ou mauvais.

---

## 🧠 Notions fondamentales à retenir sur `useEffect`

### ✅ À quoi sert `useEffect` ?

`useEffect` permet d'exécuter du **code à effet de bord** dans un composant fonctionnel React. Typiquement :

* Appels API
* Abonnements (WebSocket, événements)
* Manipulations du DOM (en web)
* Initialisations conditionnelles

### 🧨 Quand ne PAS utiliser `useEffect` ?

Dans beaucoup de cas, `useEffect` est **inutile** voire contre-productif.
Par exemple :

* Calculer une donnée dérivée d'un state ou d'une prop → faire ça directement dans le rendu ou via `useMemo`
* Gérer des événements utilisateur → faites-le dans les callbacks (onPress, etc.)

### 🧼 Nettoyage (clean-up)

Un effet doit **nettoyer** ses abonnements ou effets persistants. React appelle cette fonction de nettoyage lors du démontage du composant.

```js
useEffect(() => {
  const sub = subscribe();
  return () => sub.unsubscribe();
}, []);
```

---

## 📂 Liste des cas étudiés avec explication

### 1. `WrongDerivedState` / `RightDerivedState`

❌ Utilise `useEffect` pour synchroniser un état dérivé → duplication, bugs possibles.
✅ Calcule la valeur dérivée directement dans le rendu.

### 2. `WrongEventHandler` / `RightEventHandler`

❌ Gère des clics via `useEffect` en reliant des flags d’état → confus et inutile.
✅ Utilise des callbacks (`onPress`, `onChange`, etc.) directement.

### 3. `WrongSync` / `RightSync`

❌ Fait un appel API sans annulation → risque de mise à jour après démontage.
✅ Utilise un `AbortController` dans `useEffect` pour proprement annuler.

### 4. `WrongSubscription` / `RightSubscription`

❌ Abonne des listeners sans jamais les supprimer → fuites mémoire.
✅ Nettoie correctement avec une fonction retournée par `useEffect`.

### 5. `WrongInitialization` / `RightInitialization`

❌ Effectue une initialisation dans le corps du composant → exécuté à chaque render.
✅ Initialise dans un `useEffect([])` pour le faire une seule fois.

### 6. `WrongReset` / `RightReset`

❌ Met à jour le state à la main quand une prop change → source de bugs.
✅ Utilise la prop `key` pour forcer le remount propre d’un sous-composant.

### 7. `WrongDeps` / `RightDeps`

❌ Oublie des dépendances dans le tableau → effet obsolète, comportement imprévisible.
✅ Liste toutes les dépendances de l’effet pour garantir la cohérence.

### 8. `WrongAsyncEffect` / `RightAsyncEffect`

❌ Déclare une fonction async directement dans `useEffect` → interdit par React.
✅ Définit une fonction async dans `useEffect`, puis l’appelle.

### 9. `WrongRenderEffect` / `RightRenderEffect`

❌ Place une alerte (effet de bord) directement dans le `render()` → déclenchée à chaque render !
✅ Place l’effet dans `useEffect` pour qu’il s’exécute une seule fois.

---

## 🚀 Objectif pédagogique

Ce projet permet de :

* Comprendre **quand** `useEffect` est nécessaire (et quand il ne l’est pas)
* Savoir **écrire des effets fiables**
* Apprendre à **éviter les effets de bord indésirables**
* Structurer son code React Native proprement

---

## 📦 Structure du projet

```
.
├── DerivedState
│   ├── WrongDerivedState.js
│   └── RightDerivedState.js
├── EventHandler
│   ├── WrongEventHandler.js
│   └── RightEventHandler.js
├── Sync
│   ├── WrongSync.js
│   └── RightSync.js
├── Subscription
│   ├── WrongSubscription.js
│   └── RightSubscription.js
├── Initialization
│   ├── WrongInitialization.js
│   └── RightInitialization.js
├── Reset
│   ├── WrongReset.js
│   └── RightReset.js
├── Deps
│   ├── WrongDeps.js
│   └── RightDeps.js
├── AsyncEffect
│   ├── WrongAsyncEffect.js
│   └── RightAsyncEffect.js
├── RenderEffect
│   ├── WrongRenderEffect.js
│   └── RightRenderEffect.js
├── Trigger/
│   ├── WrongTriggerEffect.js  # Effet déclenché via state inutilement
│   └── RightTriggerEffect.js
└── README.md 
```

## 🧪 Conseils

* Évite d’utiliser `useEffect` sans raison : plus le code est déclaratif, plus il est prévisible.
* Quand tu dois utiliser un effet : pense `clean-up`, `dépendances`, et `asynchrone`.

Bon apprentissage ! ✨
