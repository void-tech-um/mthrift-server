import { Item } from "./models";

/**
 * @desc Get all items
 * @returns {Promise<Item[]>} All items
 */
export const getItems = async (): Promise<Item[]> => {
  const items = await Item.findAll();
  return items;
};

/**
 * @desc Update an item
 * @param {number} itemId
 * @param {Item} item
 * @returns {Promise<[affectedCount: number]>} Updated item
 */
export const updateItem = async (
  itemId: number,
  item: Item
): Promise<[affectedCount: number]> => {
  const updatedItem = await Item.update(item, {
    where: { itemId },
  });
  return updatedItem;
};

/**
 * @desc Create a new item
 * @param {Item} item
 * @returns {Promise<Item>} Created item
 */
export const createItem = async (item: Item): Promise<Item> => {
  const newItem = await Item.create(item);
  return newItem;
};

/**
 * @desc Delete an item
 * @param {number} itemId
 * @returns {Promise<number>} Deleted item
 */
export const deleteItem = async (itemId: number): Promise<number> => {
  const deletedItem = await Item.destroy({
    where: { itemId },
  });
  return deletedItem;
};
