import React, { useEffect, useState } from "react";
import { IoSearchOutline, IoCloseCircle } from "react-icons/io5";
import * as FiIcons from "react-icons/fi";
const MultiSelectBox = ({ items, selectedItems, onChange, placeholder = "Search...", label, mandatory, }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState(items);
    const [areAllFilteredItemsSelected, setAreAllFilteredItemsSelected] = useState(false);
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredItems(items);
        }
        else {
            const query = searchQuery.toLowerCase();
            const filtered = items.filter((item) => item.label.toLowerCase().includes(query));
            setFilteredItems(filtered);
        }
    }, [searchQuery, items]);
    const getSelectedLabels = () => items
        .filter((item) => selectedItems.includes(item.value))
        .map((item) => item.label);
    const handleItemPress = (item) => {
        if (selectedItems.includes(item.value)) {
            onChange(item.value, selectedItems.filter((i) => i !== item.value));
        }
        else {
            onChange(item.value, [...selectedItems, item.value]);
        }
    };
    const handleSelectAll = () => {
        if (areAllFilteredItemsSelected) {
            onChange("", []);
        }
        else {
            onChange("", items.map((item) => item.value));
        }
        setAreAllFilteredItemsSelected(!areAllFilteredItemsSelected);
    };
    return (<div className="space-y-3">
      {label && (<div className="flex items-center gap-1">
          <span className="text-gray-600 text-base font-medium">{label}</span>
          {mandatory && <span className="text-red-600 text-base">*</span>}
        </div>)}

      <div className="space-y-3 border rounded-xl p-4 bg-white">
        {getSelectedLabels().length > 0 && (<div className="flex flex-wrap gap-2">
            {getSelectedLabels().map((label, idx) => (<div key={idx} className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                <span className="mr-2 text-sm font-medium">{label}</span>
                <button onClick={() => {
                    const itemToRemove = items.find((item) => item.label === label);
                    if (itemToRemove) {
                        onChange(itemToRemove.value, selectedItems.filter((i) => i !== itemToRemove.value));
                    }
                }} className="hover:text-gray-500">
                  {/* <FiX size={16} /> */}
                </button>
              </div>))}
          </div>)}

        <div className="flex items-center bg-gray-50 rounded-md px-3 py-2">
          <IoSearchOutline size={20} className="text-gray-500"/>
          <input type="text" className="flex-1 ml-2 text-base text-gray-700 outline-none bg-transparent" placeholder={placeholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          {searchQuery.length > 0 && (<button onClick={() => setSearchQuery("")}>
              <IoCloseCircle size={20} className="text-gray-500"/>
            </button>)}
        </div>

        <button className="flex items-center py-2 border-b border-gray-200 hover:bg-gray-50 w-full" onClick={handleSelectAll}>
          <div className={`w-5 h-5 border-2 rounded flex items-center justify-center mr-3 ${areAllFilteredItemsSelected
            ? "bg-blue-100 border-blue-500"
            : "bg-white border-gray-400"}`}>
            {areAllFilteredItemsSelected && (<FiIcons.FiCheck size={14} className="text-blue-500"/>)}
          </div>
          <span className="text-sm font-medium">
            {areAllFilteredItemsSelected ? "Deselect All" : "Select All"}
          </span>
        </button>

        <div className="max-h-40 overflow-y-auto space-y-2">
          {filteredItems.length > 0 ? (filteredItems.map((item) => (<button key={item.value} className="flex items-center w-full py-2 hover:bg-gray-50" onClick={() => handleItemPress(item)}>
                <div className={`w-5 h-5 border-2 rounded flex items-center justify-center mr-3 ${selectedItems.includes(item.value)
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-400"}`}>
                  {selectedItems.includes(item.value) &&
                <FiIcons.FiCheck size={14} className="text-blue-500"/>}
                </div>
                <span className="text-sm">{item.label}</span>
              </button>))) : (<div className="py-3 text-center text-gray-500">No matches found</div>)}
        </div>
      </div>
    </div>);
};
export default MultiSelectBox;
