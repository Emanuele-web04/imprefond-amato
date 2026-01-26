# Fix Dialog e Carousel - Problemi di Centratura

## Riepilogo

Questo documento descrive i problemi di centratura trovati nei componenti Dialog e Carousel dell'applicazione e le soluzioni applicate.

---

## Problema 1: Dialog Decentrato (Spostato a Sinistra)

### Sintomo

Il dialog appariva spostato a **sinistra** rispetto al centro dello schermo, con il contenuto che si estendeva oltre il bordo destro.

### Causa

Nel file `src/components/ui/dialog.tsx`, il componente `DialogContent` usava `inset-4` per il posizionamento:

```tsx
className = "... fixed inset-4 z-50 m-auto ...";
```

`inset-4` in Tailwind CSS equivale a:

```css
top: 1rem;
right: 1rem;
bottom: 1rem;
left: 1rem;
```

Quando i componenti consumer (come `NewsContent.tsx`, `ProjectsGrid.tsx`, ecc.) sovrascrivevano la larghezza con valori come `w-full` o `max-w-[98vw]`, il vincolo `left: 1rem` rimaneva attivo mentre il lato destro non era più vincolato, causando lo spostamento.

### Soluzione

Sostituito il posizionamento `inset-4 m-auto` con centratura basata su **transform**:

```tsx
className =
  "... fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ...";
```

Questo metodo:

- Posiziona il centro del dialog esattamente al centro della viewport
- Funziona indipendentemente dalla larghezza del dialog
- È il metodo standard per centrare elementi con `position: fixed`

---

## Problema 2: Immagini Carousel Spostate a Destra

### Sintomo

Le immagini all'interno del carousel apparivano spostate a **destra** rispetto al centro del dialog.

### Causa

Nel file `src/components/ui/carousel.tsx`, Embla Carousel usa una convenzione con margini negativi e padding per gestire lo spacing tra slide:

**CarouselContent:**

```tsx
className = "... -ml-4 ..."; // margin-left: -1rem
```

**CarouselItem:**

```tsx
className = "... pl-4 ..."; // padding-left: 1rem
```

Questi valori dovrebbero teoricamente cancellarsi, ma in pratica creano un offset visivo:

1. Il container ha margine negativo che lo sposta a sinistra
2. Ogni item ha padding che sposta il contenuto a destra
3. L'effetto netto è che il contenuto visibile appare spostato a destra

### Soluzione

Rimossi entrambi i valori di spacing dal carousel:

**CarouselContent (prima):**

```tsx
orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col";
```

**CarouselContent (dopo):**

```tsx
orientation === "vertical" && "flex-col";
```

**CarouselItem (prima):**

```tsx
orientation === "horizontal" ? "pl-4" : "pt-4";
```

**CarouselItem (dopo):**

```tsx
// Nessun padding aggiunto
```

---

## Problema 3: Dialog non Consistenti

### Sintomo

I dialog in diverse parti dell'app avevano stili diversi, causando un'esperienza utente non uniforme.

### File interessati e soluzioni

| File                | Problema                       | Soluzione                                                |
| ------------------- | ------------------------------ | -------------------------------------------------------- |
| `ProjectsGrid.tsx`  | `sm:max-w-xl` (troppo piccolo) | Allineato a `max-w-[98vw]`                               |
| `Timeline.tsx`      | `w-auto` e `max-h-[50vh]`      | Cambiato a `w-full` e `h-[60vh] sm:h-[70vh] md:h-[80vh]` |
| `ImageDialog.tsx`   | Stili inconsistenti            | Allineato agli altri                                     |
| `FotoCarosello.tsx` | Pulsanti ai lati               | Pulsanti centrati in basso                               |

### Classe Dialog Standard

Tutti i dialog con carousel ora usano questa classe:

```tsx
className =
  "max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-7xl w-full p-2 sm:p-4 md:p-8 border-none bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl";
```

E ogni immagine nel carousel usa:

```tsx
<div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
  <img className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain" />
</div>
```

---

## File Modificati

1. `src/components/ui/dialog.tsx` - Fix centratura base
2. `src/components/ui/carousel.tsx` - Rimosso offset ml/pl
3. `src/components/shared/ImageDialog.tsx` - Allineato stili
4. `src/components/shared/ProjectsGrid.tsx` - Allineato stili
5. `src/components/FotoCarosello.tsx` - Allineato stili e pulsanti
6. `src/components/storia/Timeline.tsx` - Allineato tutti i dialog
7. `src/components/news/NewsContent.tsx` - Template di riferimento

---

## Data Fix

26 Gennaio 2026
