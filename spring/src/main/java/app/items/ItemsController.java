package app.items;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "{collectionId}/items")
public class ItemsController {

	@RequestMapping(value = "/", method = RequestMethod.GET )
	public Item[] GetAllItems(@PathVariable int collectionId) {
		System.out.println("Get Items in collection");
		return null;
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST )
	public void CreateItem(@PathVariable int collectionId, @RequestBody Item newItem) {
		System.out.println("Create Item");
	}
	
	@RequestMapping(value = "/{itemId}", method = RequestMethod.GET )
	public Item RetreiveItem(@PathVariable int collectionId, @PathVariable int itemId) {
		System.out.println("Get Item");
		Item i = new Item();
		i.ItemId = 43;
		return i;
	}
	
	@RequestMapping(value = "/{itemId}", method = RequestMethod.PUT )
	public void UpdateItem(@PathVariable int collectionId, @PathVariable int itemId, @RequestBody Item updateItem) {
		System.out.println("Update Item");
	}
	
	@RequestMapping(value = "/{itemId}", method = RequestMethod.DELETE )
	public void DeleteItem(@PathVariable int collectionId, @PathVariable int itemId) {
		System.out.println("Delete Item");
	}
}
