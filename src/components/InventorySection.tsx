import React, { useState } from 'react';
import { 
  Boxes, 
  AlertTriangle, 
  ArrowDownRight, 
  ArrowUpRight, 
  Package, 
  ShoppingCart, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { INVENTORY_ITEMS } from '../data/mockData';

export const InventorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'low-stock'>('all');

  const filteredItems = activeTab === 'low-stock'
    ? INVENTORY_ITEMS.filter((item) => item.status === 'LOW STOCK')
    : INVENTORY_ITEMS;

  return (
    <section id="inventory" className="py-20 md:py-28 bg-slate-100/70 dark:bg-[#060c18] relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Stores &amp; Inventory Hub
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Know what you have. Know what you need.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Prevent maintenance bottlenecks with real-time stock telemetry, automated reorder triggers, and bin-level tracking across all facility store rooms.
          </p>
        </div>

        {/* 6 High-Visibility Inventory Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total SKUs</span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">428</div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">Active Catalog</span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Available</span>
            <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">1,842</div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">In Store Rooms</span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-amber-300 dark:border-amber-500/30 text-center ring-1 ring-amber-500/20 shadow-xs">
            <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Low Stock</span>
            <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-300 mt-1">04</div>
            <span className="text-[10px] text-amber-600 dark:text-amber-400/80 mt-1 block">Action Required</span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Reserved</span>
            <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-300 mt-1">36</div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">Work Order Holds</span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Issued (MTD)</span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">112</div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">Consumed</span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-purple-300 dark:border-purple-500/30 text-center ring-1 ring-purple-500/20 shadow-xs">
            <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Reorder Req</span>
            <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-300 mt-1">02</div>
            <span className="text-[10px] text-purple-600 dark:text-purple-400/80 mt-1 block">PO Approvals</span>
          </div>
        </div>

        {/* 4 Core Operational Actions Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-xs">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ArrowDownRight className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Material Receipt (GRN)</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">Scan delivery &amp; log batch serials</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-xs">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Material Issue Note</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">Digital requisition tagged to WO ID</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-xs">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Stock Adjustment</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">Cycle counts &amp; audit discrepancy</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-xs">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Reorder Requirement</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">Auto-generated PO purchase indent</div>
            </div>
          </div>
        </div>

        {/* Featured High-Risk Item: AHU Air Filter Callout Banner */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50/50 dark:from-amber-950/40 dark:via-slate-900 dark:to-slate-900 border border-amber-300 dark:border-amber-500/40 shadow-sm dark:shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">INV-101</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/15 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30">
                    LOW STOCK ALERT
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                  AHU Air Filter (MERV 13 - 24x24x2)
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                  Available: <strong className="text-amber-700 dark:text-amber-300">08 boxes</strong> | Minimum threshold: <strong className="text-slate-900 dark:text-slate-200">10 boxes</strong> | Reserved: 4 boxes
                </p>
                <div className="mt-2 text-xs text-amber-700 dark:text-amber-300 font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  NexgenOps Recommendation: Replenish — Order 20 boxes to cover upcoming PM-401 through PM-404.
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <button 
                id="create-replenishment-po-btn"
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow-md shadow-amber-950/20 cursor-pointer"
              >
                Create Replenishment Indent
              </button>
            </div>
          </div>
        </div>

        {/* Live Inventory Catalog Table */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm dark:shadow-xl">
          <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Stores Catalog Live Inventory Ledger
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`text-xs px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setActiveTab('low-stock')}
                className={`text-xs px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'low-stock'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Low Stock Only (2)
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Item / Part No</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4 text-center">Available</th>
                  <th className="py-3.5 px-4 text-center">Min Buffer</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 sm:px-6">Bin Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredItems.map((item) => {
                  const isLow = item.status === 'LOW STOCK';
                  return (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-bold text-slate-900 dark:text-white">{item.name}</div>
                        <div className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400/80">{item.partNumber}</div>
                      </td>
                      <td className="py-3.5 px-4">{item.category}</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900 dark:text-white">
                        {item.available} <span className="text-[10px] font-normal text-slate-500">{item.unit}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono text-slate-500 dark:text-slate-400">
                        {item.minimum}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isLow
                            ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30'
                            : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-500 dark:text-slate-400">
                        {item.locationBin}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
