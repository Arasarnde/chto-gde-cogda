const VK_API_VERSION = '5.131';
const GROUP_ID = 'ch_g_k_spb'; // ID группы ВКонтакте

export async function getVKPosts(accessToken) {
  try {
    const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${GROUP_ID}&count=10&access_token=${accessToken}&v=${VK_API_VERSION}`);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.error_msg);
    }

    return data.response.items.map(post => ({
      id: post.id,
      title: post.text.split('\n')[0], // Берем первую строку как заголовок
      description: post.text.split('\n').slice(1).join('\n'), // Остальной текст как описание
      content: post.text,
      date: new Date(post.date * 1000).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      image: post.attachments?.find(attachment => attachment.type === 'photo')?.photo?.sizes?.pop()?.url,
      author: 'ЧГК СПб',
      readingTime: '5 мин' // Можно рассчитать на основе длины текста
    }));
  } catch (error) {
    console.error('Ошибка при получении постов из ВКонтакте:', error);
    return [];
  }
} 