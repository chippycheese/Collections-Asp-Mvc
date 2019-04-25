package app.items;

import org.springframework.data.repository.CrudRepository;

import app.collections.Collection;

public interface ItemRepository extends CrudRepository<Item, Integer> {

}
