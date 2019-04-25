package app.items;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Item {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	public int ItemId;
	
	public String Name;
	
	public int Price;
	
	public boolean Collected;
	
	public boolean Active;
	
	public boolean CollectionId;

	public int getItemId() {
		return ItemId;
	}

	public void setItemId(int itemId) {
		ItemId = itemId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getPrice() {
		return Price;
	}

	public void setPrice(int price) {
		Price = price;
	}

	public boolean isCollected() {
		return Collected;
	}

	public void setCollected(boolean collected) {
		Collected = collected;
	}

	public boolean isActive() {
		return Active;
	}

	public void setActive(boolean active) {
		Active = active;
	}

	public boolean isCollectionId() {
		return CollectionId;
	}

	public void setCollectionId(boolean collectionId) {
		CollectionId = collectionId;
	}
	
}
