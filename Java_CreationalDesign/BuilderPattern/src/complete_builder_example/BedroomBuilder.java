package complete_builder_example;

import java.awt.Color;
import java.awt.Dimension;

public class BedroomBuilder implements Builder {
	
	private Dimension dimensions;
	private int ceilingHeight;
	private int floorNumber;
	private Color wallColor;
	private int numberOfWindows;
	private int numberOfDoors;
	private boolean isDouble;
	private boolean hasEnsuite;
	
	public BedroomBuilder() {
		
	}

	@Override
	public Builder setDimensions(Dimension dimensions) {
		this.dimensions = dimensions;
		return this;
	}
	
	@Override
	public Builder setCeilingHeight(int ceilingHeight) {
		this.ceilingHeight = ceilingHeight;
		return this;
	}
	
	@Override
	public Builder setFloorNumber(int floorNumber) {
		this.floorNumber = floorNumber;
		return this;
	}
	
	@Override
	public Builder setWallColor(Color wallColor) {
		this.wallColor = wallColor;
		return this;
	}

	@Override
	public Builder setNumberOfWindows(int numberOfWindows) {
		this.numberOfWindows = numberOfWindows;
		return this;
	}

	@Override
	public Builder setNumberOfDoors(int numberOfDoors) {
		this.numberOfDoors = numberOfDoors;
		return this;
	}

	public Builder setDouble(boolean isDouble) {
		this.isDouble = isDouble;
		return this;
	}

	public Builder setHasEnsuite(boolean hasEnsuite) {
		this.hasEnsuite = hasEnsuite;
		return this;
	}
	
	public Bedroom createBedroom() {
		return new Bedroom(dimensions, ceilingHeight, floorNumber,
							wallColor, numberOfWindows, numberOfDoors, isDouble, hasEnsuite);
	}
	

}
