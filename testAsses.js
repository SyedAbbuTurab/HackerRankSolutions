function advancedWebsocketHandler(messages) {
  // your code here
  const result = [];

  for (const msg of messages) {
    const parsedMsg = typeof msg === 'string' ? JSON.parse(msg) : msg;
    const { type } = parsedMsg;

    const payload = typeof parsedMsg.payload === 'string' ? JSON.parse(parsedMsg.payload) : parsedMsg.payload;
    if (type === 'create') {
      const { itemName, quantity } = payload;
      result.push(`Created ${quantity} of ${itemName}`);
    }
    else if (type === 'modify') {
    const { itemId, action, amount } = payload;
    const actionPast = action === 'add' ? 'added' : 'subtracted' 
      result.push(`Item ${itemId} quantity ${actionPast} by ${amount}`);
    }
    else if (type === 'query') {
    const { queryType, queryValue } = payload;
      result.push(`Query of type ${queryType} with value ${queryValue} processed`);
    }
  }

  console.log(result);
  return result;
}