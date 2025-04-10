import React, { useState } from 'react';
import { Upload } from 'lucide-react';

function Report() {
  const [itemType, setItemType] = useState('lost');
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Report an Item</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex rounded-lg overflow-hidden">
            <button
              className={`flex-1 py-2 text-center ${
                itemType === 'lost'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setItemType('lost')}
            >
              Report Lost Item
            </button>
            <button
              className={`flex-1 py-2 text-center ${
                itemType === 'found'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setItemType('found')}
            >
              Report Found Item
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Item Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g., Black Wallet"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="documents">Documents</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Where was the item lost/found?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full border rounded-lg px-4 py-2"
              rows={4}
              placeholder="Provide additional details about the item..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Drag and drop an image here, or click to select a file
              </p>
              <input type="file" className="hidden" accept="image/*" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Report;