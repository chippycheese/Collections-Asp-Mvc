package app.items;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "{collectionId}/items")
public class ItemsController {

	@Autowired
	private ItemRepository itemRepo;
	
	@RequestMapping(value = "/", method = RequestMethod.GET )
	public Iterable<Item> GetAllItems(@PathVariable int collectionId) {
		System.out.println("Get Items in collection");
		return itemRepo.findAll();
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST )
	public void CreateItem(@PathVariable int collectionId, @RequestBody Item newItem) {
		System.out.println("Create Item");
		itemRepo.save(newItem);
	}
	
	@RequestMapping(value = "/{itemId}", method = RequestMethod.GET )
	public Optional<Item> RetreiveItem(@PathVariable int collectionId, @PathVariable Integer itemId) {
		System.out.println("Get Item");
		return itemRepo.findById(itemId);
	}
	
	@RequestMapping(value = "/{itemId}", method = RequestMethod.PUT )
	public void UpdateItem(@PathVariable Integer collectionId, @PathVariable Integer itemId, @RequestBody Item updateItem) {
		System.out.println("Update Item");
	}
	
	@RequestMapping(value = "/{itemId}", method = RequestMethod.DELETE )
	public void DeleteItem(@PathVariable Integer collectionId, @PathVariable Integer itemId) {
		System.out.println("Delete Item");
	}
}
