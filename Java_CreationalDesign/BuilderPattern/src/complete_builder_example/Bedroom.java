package complete_builder_example;

import java.awt.Color;
import java.awt.Dimension;

public class Bedroom {
	
	private Dimension dimenstions;
	private int ceilingHeight;
	private int floorNumber;
	private Color wallColor;
	private int numberOfWindows;
	private int numberOfDoors;
	private boolean isDouble;
	private boolean hasEnsuite;
	
	public Bedroom(Dimension dimenstions, int ceilingHeight,int floorNumber,
			Color wallColor,int numberOfWindows,int numberOfDoors,boolean isDouble,
			boolean hasEnsuite) {
		this.dimenstions=dimenstions;
		this.ceilingHeight=ceilingHeight;
		this.floorNumber=floorNumber;
		this.wallColor=wallColor;
		this.numberOfWindows=numberOfWindows;
		this.numberOfDoors=numberOfDoors;
		this.isDouble=isDouble;
		this.hasEnsuite=hasEnsuite;
	}

}
