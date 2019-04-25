package app.collections;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "collections/")
public class CollectionsController {

	@RequestMapping(value = "/", method = RequestMethod.GET )
	public Collection[] GetAllCollection() {
		System.out.println("Get All Collection");	
		return null;
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST )
	public void CreateCollection(@RequestBody Collection newCollection) {
		System.out.println("Create Collection");
	}
	
	@RequestMapping(value = "/{collectionId}", method = RequestMethod.GET )
	public Collection RetreiveCollection(@PathVariable("collectionId") int collectionId) {
		System.out.println("Get Collection");
		return null;
	}
	
	@RequestMapping(value = "/{collectionId}", method = RequestMethod.PUT )
	public void UpdateCollection(@PathVariable("collectionId") int collectionId, @RequestBody Collection updateCollection) {
		System.out.println("Update Collection");		
	}
	
	@RequestMapping(value = "/{collectionId}", method = RequestMethod.DELETE )
	public void DeleteCollection(@PathVariable("collectionId") int collectionId) {
		System.out.println("Delete Collection");
	}
	
}
