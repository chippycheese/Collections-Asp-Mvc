package app.collections;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Collection {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	public int CollectionId;
	
	public String Name;
	
	public int Collected;
	
	public int Total;
	
	public boolean Active;

	public int getCollectionId() {
		return CollectionId;
	}

	public void setCollectionId(int collectionId) {
		CollectionId = collectionId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getCollected() {
		return Collected;
	}

	public void setCollected(int collected) {
		Collected = collected;
	}

	public int getTotal() {
		return Total;
	}

	public void setTotal(int total) {
		Total = total;
	}

	public boolean isActive() {
		return Active;
	}

	public void setActive(boolean active) {
		Active = active;
	}
	
}
