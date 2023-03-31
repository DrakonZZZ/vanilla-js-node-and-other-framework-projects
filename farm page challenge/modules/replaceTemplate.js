class ReplaceTemplate {
  constructor() {}

  replace(tempIndexPage, item) {
    let output = tempIndexPage.replace(/{%ProductName%}/g, item.productName);
    output = output.replace(/{%ProductImage%}/g, item.image);
    output = output.replace(/{%ProductPrice%}/g, item.price);
    output = output.replace(/{%ProductRegion%}/g, item.from);
    output = output.replace(/{{%ProductVit%}}/g, item.nutrients);
    output = output.replace(/{%ProductQuantity%}/g, item.quantity);
    output = output.replace(/{%ProductDesc%}/g, item.description);
    output = output.replace(/{%ProductId%}/g, item.id);
    !item.organic
      ? (output = output.replace(/{%ProductOrganic%}/g, 'not-organic'))
      : (output = output.replace(/{%ProductOrganic%}/g, ''));
    return output;
  }
}

export default ReplaceTemplate;
