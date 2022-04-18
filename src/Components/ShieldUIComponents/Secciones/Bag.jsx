import React from "react";
import "./Bag.css";
import metapod from "../../../Assets/pkmnIcons/metapod.png";
import charizard from "../../../Assets/pkmnIcons/charizard.png";
import venusaur from "../../../Assets/pkmnIcons/venusaur.png";
import torkoal from "../../../Assets/pkmnIcons/torkoal.png";
import rotom from "../../../Assets/pkmnIcons/rotom-heat.png";
import sableye from "../../../Assets/pkmnIcons/sableye.png";
import {
  Mars,
  Venus,
  MedicineSyrup,
  Pokeball,
  Stars,
  Apple,
  Candy,
  Disc,
  Circle,
  Palette,
  Key,
  CaretLeft,
  CaretRight,
} from "tabler-icons-react";

import hyperPotion from "../../../Assets/itemIcons/hyper-potion.png";
import maxPotion from "../../../Assets/itemIcons/max-potion.png";
import cheriBerry from "../../../Assets/itemIcons/cheri.png";

const Bag = () => {
  const bagItem = {
    icon: hyperPotion,
    name: "Hyper potion",
    quantity: 25,
    description: "Restores 150 HP. ",
    category: "medicine",
  };
  const bagItem2 = {
    icon: maxPotion,
    name: "Max potion",
    quantity: 12,
    description: "Restores all HP. ",
    category: "medicine",
  };
  const bagItem3 = {
    icon: cheriBerry,
    name: "Cheri Berry",
    quantity: 43,
    description: "Cures Paralisis. ",
    category: "berry",
  };

  return (
    <>
      <div className="contenedorSeccionPokemon">
        <div className="contenedorListadoPokemonBag">
          <div className="pkmn">
            <div className="pkmnIcono">
              <img
                src={metapod}
                alt="Sr. Presidente"
                style={{ width: "60px" }}
              />
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Metapod</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP"></div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn">
            <div className="pkmnIcono">
              <img
                src={charizard}
                alt="el consentido"
                style={{ width: "60px" }}
              />
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Charizard</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP"></div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn">
            <div className="pkmnIcono">
              <img src={venusaur} alt="" style={{ width: "60px" }} />
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Venusaur</span>
                <span className="pkmnGender">
                  <Mars size={20} color="blue" />
                </span>
              </div>
              <div className="barraHP"></div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn">
            <div className="pkmnIcono">
              <img src={torkoal} alt="" style={{ width: "60px" }} />
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Torkoal</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP"></div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn">
            <div className="pkmnIcono">
              <img src={rotom} alt="" style={{ width: "60px" }} />
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Rotom</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP"></div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn">
            <div className="pkmnIcono">
              <img src={sableye} alt="" style={{ width: "60px" }} />
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Sableye</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP"></div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedorBag">
          <div className="bagCategories">
            <CaretLeft className="bagCategoryIcon" strokeWidth={1.5} size={40} />
            <MedicineSyrup className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <Pokeball className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <Stars className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <Apple className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <Candy className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <Disc className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <Circle className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <Palette className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <Key className="bagCategoryIcon" strokeWidth={1.5} size={35} />
            <CaretRight className="bagCategoryIcon" strokeWidth={1.5} size={40} />
          </div>
          <div className="bagCategory">Medicine</div>
          <div className="bagItems">
            <div className="itemList">
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem2.icon} alt="" />
                </div>
                <div className="itemName">{bagItem2.name}</div>

                <div className="itemQuantity">X {bagItem2.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem3.icon} alt="" />
                </div>
                <div className="itemName">{bagItem3.name}</div>

                <div className="itemQuantity">X {bagItem3.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
              <div className="item">
                <div className="itemIcon">
                  <img src={bagItem.icon} alt="" />
                </div>
                <div className="itemName">{bagItem.name}</div>

                <div className="itemQuantity">X {bagItem.quantity}</div>
              </div>
            </div>
          </div>
          <div className="bagItemDescriptionContainer">
            <div className="bagItemDescriptionName">{bagItem3.name}</div>
            <div className="bagItemDescriptionText">{bagItem3.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;
