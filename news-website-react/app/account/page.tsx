"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, CreditCard, Bell, Shield, LogOut, Check } from "lucide-react";

// Mock user data
const mockUser = {
  id: "user-1",
  email: "john.doe@example.com",
  name: "John Doe",
  avatar_url: undefined,
  subscription_status: "premium" as const,
  subscription_expires_at: "2025-03-15T00:00:00Z",
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "subscription" | "notifications" | "security">("profile");
  const [name, setName] = useState(mockUser.name);
  const [email, setEmail] = useState(mockUser.email);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const tabs = [
    { id: "profile" as const, label: "Profile", icon: User },
    { id: "subscription" as const, label: "Subscription", icon: CreditCard },
    { id: "notifications" as const, label: "Notifications", icon: Bell },
    { id: "security" as const, label: "Security", icon: Shield },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <nav className="md:w-64 shrink-0">
          <ul className="space-y-1">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t mt-4">
              <button
                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </li>
          </ul>
        </nav>

        {/* Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="border rounded-xl p-6 bg-card">
              <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-3xl font-semibold text-muted-foreground">
                      {name[0]?.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Full Name
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <Button onClick={handleSave}>
                    {saved ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Saved!
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Subscription Tab */}
          {activeTab === "subscription" && (
            <div className="space-y-6">
              <div className="border rounded-xl p-6 bg-card">
                <h2 className="text-xl font-semibold mb-6">
                  Subscription Status
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-medium">Current Plan</p>
                    <p className="text-muted-foreground text-sm">
                      Premium Monthly
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-medium">Next Billing Date</p>
                    <p className="text-muted-foreground text-sm">
                      {formatDate(mockUser.subscription_expires_at!)}
                    </p>
                  </div>
                  <span className="font-medium">$19.99/mo</span>
                </div>
                <div className="flex gap-2 pt-4 border-t">
                  <Link href="/subscribe">
                    <Button variant="outline">Change Plan</Button>
                  </Link>
                  <Button variant="outline" className="text-destructive bg-transparent">
                    Cancel Subscription
                  </Button>
                </div>
              </div>

              <div className="border rounded-xl p-6 bg-card">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-muted-foreground text-sm">
                      Expires 12/26
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update Payment Method
                </Button>
              </div>

              <div className="border rounded-xl p-6 bg-card">
                <h2 className="text-xl font-semibold mb-6">Billing History</h2>
                <div className="space-y-3">
                  {[
                    { date: "Jan 15, 2025", amount: "$19.99", status: "Paid" },
                    { date: "Dec 15, 2024", amount: "$19.99", status: "Paid" },
                    { date: "Nov 15, 2024", amount: "$19.99", status: "Paid" },
                  ].map((invoice, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b last:border-0"
                    >
                      <span className="text-sm">{invoice.date}</span>
                      <span className="text-sm font-medium">{invoice.amount}</span>
                      <span className="text-sm text-green-600">{invoice.status}</span>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="border rounded-xl p-6 bg-card">
              <h2 className="text-xl font-semibold mb-6">
                Notification Preferences
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: "Breaking News Alerts",
                    description: "Get notified about major breaking news stories",
                    enabled: true,
                  },
                  {
                    label: "Daily Newsletter",
                    description: "Receive a daily digest of top stories",
                    enabled: true,
                  },
                  {
                    label: "Weekly Newsletter",
                    description: "Get a weekly roundup of the best content",
                    enabled: false,
                  },
                  {
                    label: "Promotional Emails",
                    description: "Receive special offers and promotions",
                    enabled: false,
                  },
                ].map((pref, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b last:border-0"
                  >
                    <div>
                      <p className="font-medium">{pref.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {pref.description}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={pref.enabled}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
              <Button className="mt-6">Save Preferences</Button>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="border rounded-xl p-6 bg-card">
                <h2 className="text-xl font-semibold mb-6">Change Password</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Current Password
                    </label>
                    <Input type="password" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      New Password
                    </label>
                    <Input type="password" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Confirm New Password
                    </label>
                    <Input type="password" />
                  </div>
                  <Button>Update Password</Button>
                </div>
              </div>

              <div className="border rounded-xl p-6 bg-card">
                <h2 className="text-xl font-semibold mb-6">
                  Two-Factor Authentication
                </h2>
                <p className="text-muted-foreground mb-4">
                  Add an extra layer of security to your account by enabling
                  two-factor authentication.
                </p>
                <Button variant="outline">Enable 2FA</Button>
              </div>

              <div className="border rounded-xl p-6 bg-card border-destructive/50">
                <h2 className="text-xl font-semibold mb-4 text-destructive">
                  Danger Zone
                </h2>
                <p className="text-muted-foreground mb-4">
                  Once you delete your account, there is no going back. Please be
                  certain.
                </p>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
