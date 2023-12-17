const ICONS = {
  calculator:
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 64 64"><path fill="#25333a" d="M54.45 0H11.042c-.357 0-.655.44-.655.962v61.915c0 .525.298.966.655.966H54.45a.53.53 0 0 0 .462-.283a.09.09 0 0 0 .019-.027c.107-.155.174-.374.174-.655V.963C55.104.44 54.807 0 54.45 0"/><path fill="#3f565f" d="M52.845 25.931H12.506c-.329 0-.608.261-.608.57v36.774c0 .307.279.569.608.569h40.34a.59.59 0 0 0 .414-.157c.006-.002.01-.009.01-.009a.514.514 0 0 0 .184-.404V26.5c-.001-.309-.28-.569-.609-.569"/><path fill="#799999" d="M22.659 28.3H15.88c-.057 0-.104.044-.104.096v6.181c0 .052.046.097.104.097h6.778a.098.098 0 0 0 .07-.026l.001-.002l.004-.001a.092.092 0 0 0 .028-.067v-6.181c.001-.053-.047-.097-.102-.097m8.551 0h-6.78c-.055 0-.102.044-.102.096v6.181a.1.1 0 0 0 .102.097h6.78a.094.094 0 0 0 .07-.026l.002-.002l.004-.001a.092.092 0 0 0 .028-.067v-6.181c0-.053-.048-.097-.104-.097m8.376-.06h-6.778c-.056 0-.104.044-.104.097v6.181c0 .052.048.096.104.096h6.778a.098.098 0 0 0 .07-.025l.004-.002l.002-.002a.09.09 0 0 0 .027-.066v-6.181a.1.1 0 0 0-.103-.098m8.404 0h-6.779c-.056 0-.104.044-.104.097v6.181c0 .052.048.096.104.096h6.779a.1.1 0 0 0 .07-.025l.004-.002l.002-.002a.095.095 0 0 0 .027-.066v-6.181c.001-.053-.045-.098-.103-.098m-25.331 9.176H15.88c-.057 0-.104.044-.104.096v6.181c0 .052.046.097.104.097h6.778a.102.102 0 0 0 .07-.026l.001-.002l.004-.002a.09.09 0 0 0 .028-.066v-6.181c.001-.053-.047-.097-.102-.097m8.551 0h-6.78c-.055 0-.102.044-.102.096v6.181a.1.1 0 0 0 .102.097h6.78a.098.098 0 0 0 .07-.026l.002-.002l.004-.002a.09.09 0 0 0 .028-.066v-6.181c0-.053-.048-.097-.104-.097m8.376 0h-6.778c-.056 0-.104.044-.104.096v6.181c0 .052.048.097.104.097h6.778a.098.098 0 0 0 .07-.026l.004-.002l.002-.002a.089.089 0 0 0 .027-.066v-6.181a.1.1 0 0 0-.103-.097m8.404 0h-6.779c-.056 0-.104.044-.104.096v6.181c0 .052.048.097.104.097h6.779a.1.1 0 0 0 .07-.026l.004-.002l.002-.002a.093.093 0 0 0 .027-.066v-6.181c.001-.053-.045-.097-.103-.097M22.659 46.12H15.88c-.057 0-.104.044-.104.096v6.182c0 .052.046.096.104.096h6.778a.102.102 0 0 0 .07-.025l.001-.002l.004-.002a.091.091 0 0 0 .028-.066v-6.182c.001-.053-.047-.097-.102-.097m8.551 0h-6.78c-.055 0-.102.044-.102.096v6.182c0 .052.046.096.102.096h6.78a.098.098 0 0 0 .07-.025l.002-.002l.004-.002a.091.091 0 0 0 .028-.066v-6.182c0-.053-.048-.097-.104-.097m8.376 0h-6.778c-.056 0-.104.044-.104.096v6.182c0 .052.048.096.104.096h6.778a.098.098 0 0 0 .07-.025l.004-.002c0-.002.002-.002.002-.002a.09.09 0 0 0 .027-.066v-6.182a.1.1 0 0 0-.103-.097m8.404 0h-6.779c-.056 0-.104.044-.104.096v6.182c0 .052.048.096.104.096h6.779a.1.1 0 0 0 .07-.025l.004-.002c0-.002.002-.002.002-.002a.095.095 0 0 0 .027-.066v-6.182c.001-.053-.045-.097-.103-.097m-25.331 8.518H15.88c-.057 0-.104.044-.104.096v6.181c0 .052.046.097.104.097h6.778a.102.102 0 0 0 .07-.026l.001-.002l.004-.002a.09.09 0 0 0 .028-.066v-6.181c.001-.053-.047-.097-.102-.097m8.551 0h-6.78c-.055 0-.102.044-.102.096v6.181a.1.1 0 0 0 .102.097h6.78a.098.098 0 0 0 .07-.026l.002-.002l.004-.002a.09.09 0 0 0 .028-.066v-6.181c0-.053-.048-.097-.104-.097m8.376 0h-6.778c-.056 0-.104.044-.104.096v6.181c0 .052.048.097.104.097h6.778a.098.098 0 0 0 .07-.026l.004-.002c0-.002.002-.002.002-.002a.089.089 0 0 0 .027-.066v-6.181a.1.1 0 0 0-.103-.097"/><path fill="#ee4237" d="M47.99 54.638h-6.779c-.056 0-.104.044-.104.096v6.181c0 .052.048.097.104.097h6.779a.1.1 0 0 0 .07-.026l.004-.002c0-.002.002-.002.002-.002a.093.093 0 0 0 .027-.066v-6.181c.001-.053-.045-.097-.103-.097"/><path fill="#5f9999" d="M50.765 6.347h-36.18c-.294 0-.545.102-.545.22v14.232c0 .117.251.22.545.22h36.17a.995.995 0 0 0 .379-.065c.009-.003.015-.005.021-.005c.087-.035.146-.087.146-.15V6.567c-.001-.118-.252-.22-.546-.22"/></svg>',
  synth:
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 64 64"><path fill="#a7a9ac" d="M32.05 2.471H20.273v2.252c0 .053-.034.091-.042.139h11.818c.97 0 1.758-.534 1.758-1.194c.001-.662-.787-1.197-1.757-1.197"/><path fill="#304347" d="M34.09 9.649c-.091-.025-2.702-.012-2.81-.012l-8.482.012c-1.278 0-1.25 2.01.021 2.01h9.717c3.179-.102 2.231 8.746 2.212 10.806c-.012 1.298 1.965 1.269 1.976-.023c.03-3.175.825-11.859-2.634-12.791M45.582 3.3c-4.273-.675-11.802-.305-11.802-.305c-1.278 0-1.252 2.01.021 2.01c0 0 6.186-.168 9.716 0c3.529.168 2.231 16.78 2.214 18.839c-.014 1.298 1.964 1.269 1.976-.023c.029-3.177 1.425-19.958-2.125-20.519"/><g fill="#243438"><path d="M63.751 18.289H4.621c-.261 0-.466.097-.618.19l-.011.033c-.019 0-.294.014-.301.034c-.146.082-.523.223-.523.388v36.703c0 .304.964 1.704 1.453 1.704h59.13v-39.05"/><path d="M63.751 24.297h-60.2c-.269 0-.478-.341-.627-.251c0 0-.012-.186-.017-.182c-.016 0-1.249-.096-1.256-.076c-.15.078-1.484.102-1.484.257v34.482c0 .288 2.884 2.819 3.385 2.819h60.2z"/></g><path fill="#2e4247" d="M63.751 51.33a112.934 112.934 0 0 1-16.945-.825c-17.589-2.159-37.682-9.19-39.922-32.22H3.55c-.267 0-.379-.268-3.383.645v36.703c0 .304 2.886 1.704 3.383 1.704h60.2v-6.01"/><path fill="#e6e7e8" d="M10.194 57.03H61.85c.432 0 .787-.165.787-.359V33.376c0-.199-.355-.364-.787-.364H10.197c-.232 0-.405.037-.528.101c0 0-.013.004-.021.01c0 0-.016.002-.023.015c-.123.051-.212.134-.212.239v23.295c.001.193.363.358.784.358"/><path fill="#da1c5c" d="M45.44 20.426v9.445c0 .078.026.145.058.145h3.633c.028 0 .058-.067.058-.145v-9.445a.218.218 0 0 0-.02-.096v-.008c-.012-.022-.023-.04-.038-.04h-3.632c-.033.001-.059.066-.059.144"/><path fill="#00a79d" d="M50.746 20.426v9.445c0 .078.023.145.058.145h3.629c.034 0 .061-.067.061-.145v-9.445a.209.209 0 0 0-.017-.096h-.002v-.008c-.008-.022-.023-.04-.042-.04h-3.629c-.034.001-.058.066-.058.144"/><path fill="#243438" d="M14.587 24.823c0 2.045-1.634 3.703-3.644 3.703c-2.01 0-3.646-1.657-3.646-3.703c0-2.048 1.632-3.705 3.646-3.705c2.01 0 3.644 1.657 3.644 3.705"/><path fill="#304249" d="M14.214 24.823c0 1.837-1.465 3.326-3.271 3.326c-1.811 0-3.273-1.488-3.273-3.326c0-1.84 1.463-3.328 3.273-3.328c1.807 0 3.271 1.488 3.271 3.328"/><path fill="#1c75bc" d="M13.857 24.823c0 1.636-1.305 2.961-2.915 2.961c-1.609 0-2.914-1.325-2.914-2.961c0-1.638 1.305-2.963 2.914-2.963c1.611 0 2.915 1.325 2.915 2.963"/><path fill="#243438" d="M10.943 22.23c-.522 0-1 .159-1.409.431c.004-.004.004-.008.004-.01a2.493 2.493 0 0 0-.396.331c-.004.004-.005.009-.01.013a2.621 2.621 0 0 0-.304.372c-.004.006-.008.014-.014.02a2.66 2.66 0 0 0-.222.419l-.003.012a2.502 2.502 0 0 0-.142.447l-.013.081a2.65 2.65 0 0 0-.047.472v.008c0 1.434 1.142 2.594 2.555 2.594c1.411 0 2.556-1.161 2.556-2.594c.001-1.435-1.144-2.596-2.555-2.596m12.483 2.593c0 2.045-1.633 3.703-3.645 3.703c-2.01 0-3.643-1.657-3.643-3.703c0-2.048 1.633-3.705 3.643-3.705s3.645 1.657 3.645 3.705"/><path fill="#304249" d="M23.05 24.823c0 1.837-1.467 3.326-3.273 3.326s-3.272-1.488-3.272-3.326c0-1.84 1.466-3.328 3.272-3.328c1.806 0 3.273 1.488 3.273 3.328"/><path fill="#1c75bc" d="M22.696 24.823c0 1.636-1.305 2.961-2.915 2.961c-1.609 0-2.914-1.325-2.914-2.961c0-1.638 1.305-2.963 2.914-2.963c1.611 0 2.915 1.325 2.915 2.963"/><path fill="#243438" d="M19.781 22.23c-.52 0-1 .159-1.408.431c.004-.004.004-.008.004-.01a2.523 2.523 0 0 0-.394.331l-.012.013a2.548 2.548 0 0 0-.303.372c-.006.006-.01.014-.014.02a2.847 2.847 0 0 0-.224.419c0 .004-.004.008-.004.012a2.866 2.866 0 0 0-.139.447a1.98 1.98 0 0 1-.011.081a2.402 2.402 0 0 0-.051.472v.008c0 1.434 1.141 2.594 2.555 2.594c1.414 0 2.556-1.161 2.556-2.594c.001-1.435-1.141-2.596-2.555-2.596m12.742 2.593c0 2.045-1.633 3.703-3.644 3.703c-2.01 0-3.644-1.657-3.644-3.703c0-2.048 1.633-3.705 3.644-3.705c2.01 0 3.644 1.657 3.644 3.705"/><path fill="#304249" d="M32.15 24.823c0 1.837-1.467 3.326-3.273 3.326c-1.807 0-3.273-1.488-3.273-3.326c0-1.84 1.466-3.328 3.273-3.328c1.807 0 3.273 1.488 3.273 3.328"/><path fill="#1c75bc" d="M31.793 24.823c0 1.636-1.304 2.961-2.914 2.961c-1.609 0-2.914-1.325-2.914-2.961c0-1.638 1.305-2.963 2.914-2.963c1.61 0 2.914 1.325 2.914 2.963"/><path fill="#243438" d="M28.879 22.23c-.521 0-1 .159-1.409.431c.003-.004.003-.008.003-.01c-.142.094-.27.208-.393.331l-.012.013a2.615 2.615 0 0 0-.303.372l-.014.02a2.665 2.665 0 0 0-.223.419c0 .004-.004.008-.004.012a2.76 2.76 0 0 0-.138.447l-.013.081a2.4 2.4 0 0 0-.049.472v.008c0 1.434 1.142 2.594 2.555 2.594c1.412 0 2.556-1.161 2.556-2.594c0-1.435-1.143-2.596-2.556-2.596m7.726-18.397c0 1.477-.585 2.677-1.306 2.677H25.91c-.722 0-1.308-1.2-1.308-2.677c0-1.479.586-2.677 1.308-2.677h9.39c.721 0 1.305 1.198 1.305 2.677"/><path fill="#a7a9ac" d="M20.972 10.09H9.196v2.251c0 .053-.036.092-.042.14h11.818c.971 0 1.758-.534 1.758-1.193c0-.663-.787-1.198-1.758-1.198"/><path fill="#243438" d="M25.302 10.988c0 1.479-.585 2.676-1.307 2.676h-9.387c-.723 0-1.308-1.197-1.308-2.676s.585-2.676 1.308-2.676h9.387c.721 0 1.307 1.198 1.307 2.676"/><path fill="#c8cbcc" d="M18.921 32.958h8.804v24.1h-8.804z"/><path fill="#909c9e" d="M18.296 32.958h.996v24.1h-.996zm8.934.016h.998v24.1h-.998z"/><path fill="#c8cbcc" d="M33.976 33.01h8.149v23.98h-8.149zm19.966 0h8.694v23.98h-8.694z"/><path fill="#243438" d="M15.941 32.572v18.891c0 .159.035.289.081.289h4.976c.046 0 .075-.13.075-.289V32.572a.594.594 0 0 0-.022-.193v-.012c-.014-.045-.034-.077-.053-.077h-4.976c-.045 0-.081.128-.081.282m10.249 0v18.891c0 .159.041.289.085.289h4.974c.043 0 .077-.13.077-.289V32.572a.869.869 0 0 0-.02-.191v-.014c-.016-.049-.039-.077-.057-.077h-4.974c-.044 0-.085.128-.085.282"/><path fill="#909c9e" d="M41.627 32.974h.998v24.1h-.998zm11.813 0h.995v24.1h-.995z"/><path fill="#243438" d="M39.561 32.572v18.891c0 .159.035.289.079.289h4.976c.043 0 .077-.13.077-.289V32.572a.655.655 0 0 0-.022-.193v-.012c-.012-.045-.035-.077-.055-.077H39.64c-.044 0-.079.128-.079.282m11.185 0v18.891c0 .159.033.289.073.289h4.982c.038 0 .069-.13.069-.289V32.572a.816.816 0 0 0-.017-.193s-.003-.002-.003-.004v-.008c-.012-.045-.031-.077-.05-.077h-4.983c-.038 0-.071.128-.071.282"/></svg>',
  tiktoktoe:
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 128 128"><path fill="#CECECE" d="M33.09 16.55s-11.5 4.75-14.2 6.7c-3.29 2.38-7.29 5.41-9.41 9.46c-2.03 3.87-2.84 6.83-2.99 11.79c-.15 4.96 5.15 46.15 5.15 46.15s28.72 27.06 33.25 29.11s11.21 4.56 19.23 4.41c8.02-.15 13.29-2.62 16.36-4.08c3.06-1.46 39.4-55.26 39.7-59.64s.59-12.73.41-16.26c-.19-3.62-.93-6.51-2.83-10.16s-5.02-7.21-6.91-8.82c-1.9-1.6-25.75-12.31-32.97-13.93c-20.86-4.65-44.79 5.27-44.79 5.27"/><path fill="#EAEAEA" d="M15.44 29.1c.14 4.89 4.08 7.15 12.11 11.23S56 56.38 64.46 56.67c8.46.29 39.82-18.77 44.35-21.7c4.48-2.9 5.23-7.53 1.02-10.69c-5.84-4.37-31.95-16.48-37.49-18.52c-2.83-1.04-10.04-2.66-15.76-.44c-4.52 1.75-33.19 15.02-35.96 16.77c-2.77 1.75-5.25 4.28-5.18 7.01"/><path fill="#FFF" d="M34.34 19.12c-1.78-2.01-14.31 4.55-14.31 10.14c0 5.42 11.37 12.32 14.22 9.76c2.05-1.84-5.21-7.58-4.26-10.9c.94-3.32 5.87-7.3 4.35-9m12.4 28.96c-1.97 2.85 10.62 8.98 18.3 8.98c7.23 0 19.04-7.06 17.52-9.11c-2.46-3.32-8.43-.2-17.72 0c-5.12.11-16.05-2.84-18.1.13m45.67-9.04c2.46 1.61 16.49-5.5 16.77-9.76s-8.72-9.38-11.28-7.58c-2.56 1.8.76 3.13-.09 6.25s-8.35 9.16-5.4 11.09"/><path fill="#DFDFDF" d="M6.48 45.09c-.15 5.17.16 36.73.23 41.01c.07 4.72 1.23 9.97 4.37 12.66s28.57 18.82 34.29 21.29c8.01 3.46 15.8-.34 16.36-8.96c.56-8.63.22-34.96.22-38.54s-1.8-8.86-5.72-11.55c-3.92-2.69-34.92-20.47-38.1-22.3c-4.48-2.57-11.42-1.34-11.65 6.39"/><path fill="#B8B8B8" d="M70.68 61.34c-3.36 2.66-4.71 6.5-4.71 10.64s-.22 36.08-.11 39.33s4.71 11.88 11.88 9.75c7.41-2.2 16.81-8.85 23.53-12.89c6.72-4.03 11.96-7.45 14.3-9.37c3-2.45 5.03-8.38 5.14-13.42c.11-4.93-.03-35.79-.12-38.21c-.22-5.68-2.52-10.37-8.68-9.03S75.5 57.53 70.68 61.34"/><ellipse cx="64.29" cy="29.27" fill="#FE4E27" rx="13.81" ry="9.93"/><path fill="#2F2F2F" d="M26.49 55.55c1.8 5.02 1.26 10.22-2.59 11.6s-8.46-2.05-10.23-6.96c-1.81-5.02-1.36-10.23 2.59-11.6c3.87-1.33 8.43 1.94 10.23 6.96M51.82 99.6c2.14 4.88 2.02 10.66-1.72 12.3c-3.74 1.64-8.81-1.77-10.92-6.55c-2.15-4.88-1.83-10.23 1.91-11.87c3.75-1.64 8.59 1.24 10.73 6.12m50.14-32.64c3.27 1.86 8.53-.45 11.24-5.19c2.71-4.75 2.25-10.1-1.01-11.97c-3.27-1.86-8.44.44-11.15 5.19c-2.71 4.74-2.35 10.11.92 11.97M89.04 88.7c3.32 1.94 8.72-.37 11.54-5.2c2.82-4.82 2.42-10.31-.9-12.25s-8.83.21-11.65 5.03c-2.82 4.84-2.3 10.48 1.01 12.42m-12.83 22.22c3.21 1.96 8.54-.2 11.39-4.86s2.55-10.03-.66-11.99c-3.21-1.96-8.18-.58-11.46 4.61c-2.92 4.61-2.48 10.28.73 12.24"/></svg>',
  calendar:
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 128 128"><path fill="#BDBDBD" d="M6.81 45.78v64.74c0 3.12 2.9 5.21 6.32 7.61c3.9 2.74 8.48 5.25 10.17 5.25l93.55.62c2.4 0 4.34-2.94 4.34-5.34V45.78z"/><linearGradient id="notoTearOffCalendar0" x1="117.05" x2="117.05" y1="74.704" y2="114.633" gradientUnits="userSpaceOnUse"><stop offset=".337" stop-color="#616161"/><stop offset="1" stop-color="#616161" stop-opacity="0"/></linearGradient><path fill="url(#notoTearOffCalendar0)" d="m121.19 118.66l-8.28-8.51V43.92l8.28-.19z" opacity=".29"/><path fill="#C62828" d="m121.19 51.32l-6.46-4.05L104.62 4h5.44c9.65 0 11.13 5.57 11.13 7.47z"/><path fill="#FAFAFA" d="M9.75 45.78v62.68c0 2.7 2.19 4.88 4.88 4.88h94.85c2.7 0 5.22-2.01 5.22-4.71V45.78z"/><path fill="#F44336" d="M114.73 47.27H6.81V9.75C6.81 6.57 9.38 4 12.56 4h96.59c3.19 0 5.77 2.59 5.75 5.78z"/><path fill="#FFF" d="M41.95 15.46h4.12V29.3c0 1.27-.28 2.4-.84 3.37c-.56.97-1.36 1.73-2.38 2.26c-1.03.53-2.18.8-3.47.8c-2.11 0-3.76-.54-4.94-1.61c-1.18-1.07-1.77-2.6-1.77-4.56h4.15c0 .98.21 1.7.62 2.17c.41.47 1.06.7 1.95.7c.79 0 1.41-.27 1.88-.81s.7-1.31.7-2.31V15.46zm16.28 18.48c-.98 1.19-2.33 1.78-4.06 1.78c-1.59 0-2.81-.46-3.64-1.37c-.84-.91-1.27-2.26-1.28-4.02V20.6h3.97v9.61c0 1.55.7 2.32 2.11 2.32c1.35 0 2.27-.47 2.77-1.4V20.6h3.98v14.85h-3.73zm11.02 1.51h-3.98V14.37h3.98zm8.81-5.62l2.75-9.24h4.26L79.1 37.75l-.33.78c-.89 1.94-2.35 2.91-4.39 2.91c-.58 0-1.16-.09-1.76-.26v-3.01l.6.01c.75 0 1.31-.11 1.68-.34c.37-.23.66-.61.87-1.14l.47-1.22l-5.2-14.89h4.27z"/><path d="M51.58 102.31H43V69.26l-10.24 3.17v-6.97l17.89-6.41h.92v43.26zM91.95 63.9l-16.7 38.41H66.2l16.73-36.28H61.45v-6.91h30.5z"/><path fill="#616161" d="m114.7 52.24l-104.95.11v-5.08H114.7z" opacity=".29"/><circle cx="22.8" cy="17.74" r="7.1" fill="#606060"/><circle cx="20.44" cy="15.39" r="7.1" fill="#94D1E0"/><path fill="#C9EFF2" d="M21.05 12.45c-.16.85-.7 1.57-1.32 2.18c-.74.72-1.61 1.32-2.59 1.65c-.58.2-1.25.28-1.76-.06c-1.41-.95-.28-4.52.79-5.47c1.63-1.44 5.44-1.17 4.88 1.7"/><circle cx="101.3" cy="17.74" r="7.1" fill="#606060"/><circle cx="98.95" cy="15.39" r="7.1" fill="#94D1E0"/><path fill="#C9EFF2" d="M99.56 12.45c-.16.85-.7 1.57-1.32 2.18c-.74.72-1.61 1.32-2.59 1.65c-.58.2-1.25.28-1.76-.06c-1.41-.95-.28-4.52.79-5.47c1.63-1.44 5.43-1.17 4.88 1.7"/><path fill="#757575" d="M103.71 118.74c-3.18.39-6.36.56-9.54.84c-3.18.2-6.36.38-9.54.5c-3.18.16-6.36.19-9.54.29l-9.54.09l-9.54-.1c-3.18-.09-6.36-.13-9.54-.29c-3.18-.12-6.36-.3-9.54-.5c-3.18-.28-6.36-.45-9.54-.84v-.2l38.15-.1l38.15.1v.21zm-19.21-5.4h25.32c2.7 0 4.88-2.19 4.88-4.88V90.03s-5.5 7.64-13.83 13.92s-16.37 9.39-16.37 9.39"/><path fill="#BDBDBD" d="M107.17 104.31c7.72-9.09 7.53-14.27 7.53-14.27s-2.23 3.14-9.24 3.85c-2.47.25-6.01-.7-8.62-1.57c-1.57-.52-3.2.6-3.25 2.24c-.07 2.11-.42 5.07-1.55 8.59c-1.88 5.88-7.55 10.2-7.55 10.2s14.05 1.11 22.68-9.04"/></svg>'
}

export { ICONS }
