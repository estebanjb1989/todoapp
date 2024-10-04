export const getTimeAgoFromTS = (timestamp) => {
    const now = new Date();
    const diff = now.getTime() - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (seconds > 60) {
      return `${Math.floor(seconds / 60)} ${seconds % 60} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  }