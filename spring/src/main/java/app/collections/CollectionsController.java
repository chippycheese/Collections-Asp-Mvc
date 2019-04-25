package app.collections;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "collections/")
public class CollectionsController {

	@Autowired
	private CollectionRepository collectionRepo;
	
	@RequestMapping(value = "/", method = RequestMethod.GET )
	public Iterable<Collection> GetAllCollection() {
		System.out.println("Get All Collection");	
		return collectionRepo.findAll();
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST )
	public void CreateCollection(@RequestBody Collection newCollection) {
		System.out.println("Create Collection");
		collectionRepo.save(newCollection);
	}
	
	@RequestMapping(value = "/{collectionId}", method = RequestMethod.GET )
	public Optional<Collection> RetreiveCollection(@PathVariable("collectionId") Integer collectionId) {
		System.out.println("Get Collection");
		return collectionRepo.findById(collectionId);
	}
	
	@RequestMapping(value = "/{collectionId}", method = RequestMethod.PUT )
	public void UpdateCollection(@PathVariable("collectionId") Integer collectionId, @RequestBody Collection updateCollection) {
		System.out.println("Update Collection");	
		Optional<Collection> c = collectionRepo.findById(collectionId);
	}
	
	@RequestMapping(value = "/{collectionId}", method = RequestMethod.DELETE )
	public void DeleteCollection(@PathVariable("collectionId") Integer collectionId) {
		System.out.println("Delete Collection");
		collectionRepo.deleteById(collectionId);
	}
	
}
