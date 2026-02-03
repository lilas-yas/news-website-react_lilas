"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  User,
  CreditCard,
  Bell,
  Shield,
  LogOut,
  Check,
} from "lucide-react";
import { getUser, setUser, clearUser } from "@/lib/auth/client";

export default function AccountPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<
    "profile" | "subscription" | "notifications" | "security"
  >("profile");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  // ✅ تحميل بيانات المستخدم عند فتح الصفحة
  useEffect(() => {
    const user = getUser();
    if (!user) {
      router.replace("/login");
      return;
    }
    setName(user.name);
    setEmail(user.email);
  }, [router]);

  // ✅ حفظ البيانات فعليًا
  const handleSave = () => {
    setUser({ name, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
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
        {/* Sidebar */}
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
                onClick={() => {
                  clearUser();
                  router.replace("/login");
                }}
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
          {activeTab === "profile" && (
            <div className="border rounded-xl p-6 bg-card">
              <h2 className="text-xl font-semibold mb-6">
                Profile Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-3xl font-semibold text-muted-foreground">
                      {name?.[0]?.toUpperCase()}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
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

          {activeTab !== "profile" && (
            <div className="border rounded-xl p-6 bg-card text-muted-foreground">
              This section is UI-only for now.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
