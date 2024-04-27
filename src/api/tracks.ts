async function getData() {
    const res = await fetch('https://example.com/...');
  
    if (!res.ok) {
      throw new Error('Ошибка при получении данных');
    }
  
    return res.json();
  }
  
  // Обратите внимание, что функция компонента также является асинхронной
  export default async function HomePage() {
    const data = await getData();
  
    return <main>/* Некий контент */</main>;
  }