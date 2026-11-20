"use client";
import { useState } from "react";

export default function ToggleButton() {
  const [wifi, setWifi] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);
  const [notifications, setNotification] = useState<boolean>(false);
  const [bluetooth, setBluetooth] = useState<boolean>(false);

  const onWifi = () => {
    setWifi(true);
  };
  const offWifi = () => {
    setWifi(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-yellow-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Toggle Switch
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          Customize your preferences
        </p>

        <div className="mt-8 space-y-6">
          {/* Wi-Fi Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-800">Wi-Fi</h2>
              <p className="text-sm text-gray-500">
                {wifi ? "Wi-Fi is enabled" : "Wi-Fi is disabled"}
              </p>
            </div>

            <button
              onClick={() => setWifi(!wifi)}
              className={`h-7 w-14 rounded-full p-1 transition-colors duration-300 ${
                wifi ? "bg-indigo-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  wifi ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <hr className="border-gray-100" />

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-800">Dark Mode</h2>
              <p className="text-sm text-gray-500">
                {dark ? "Dark Mode" : "Light Mode"}
              </p>
            </div>

            <button
              onClick={() => setDark(!dark)}
              className={`h-7 w-14 rounded-full p-1 transition-colors duration-300 ${
                dark ? "bg-indigo-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  dark ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <hr className="border-gray-100" />

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-800">Notifications</h2>
              <p className="text-sm text-gray-500">Receive notifications</p>
            </div>

            <div className="h-7 w-14 rounded-full bg-indigo-600 p-1">
              <div className="h-5 w-5 translate-x-7 rounded-full bg-white shadow-md"></div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Bluetooth Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-800">Bluetooth</h2>
              <p className="text-sm text-gray-500">Connect nearby devices</p>
            </div>

            <div className="h-7 w-14 rounded-full bg-gray-300 p-1">
              <div className="h-5 w-5 rounded-full bg-white shadow-md"></div>
            </div>
          </div>
        </div>

        <button className="mt-8 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
