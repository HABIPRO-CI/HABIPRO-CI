"use client";
import React, { useState, useEffect } from 'react';

const HabiproTenantDashboard = () => {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('fr-FR'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('fr-FR'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'dashboard', icon: '🏠', label: 'Tableau de bord', active: true },
    { id: 'housing', icon: '🏡', label: 'Mon Logement' },
    { id: 'payments', icon: '💳', label: 'Paiements & Loyers', badge: '2' },
    { id: 'reports', icon: '⚠️', label: 'Signalements' },
    { id: 'documents', icon: '📄', label: 'Mes Documents' },
    { id: 'maintenance', icon: '🔧', label: 'Maintenance', badge: '1' },
    { id: 'messages', icon: '💬', label: 'Messages' },
    { id: 'forum', icon: '👥', label: 'Forum Communauté' },
    { id: 'credit', icon: '💰', label: 'Simulation Crédit' },
    { id: 'legal', icon: '⚖️', label: 'Base Juridique' },
    { id: 'settings', icon: '⚙️', label: 'Paramètres' },
    { id: 'help', icon: '❓', label: 'Aide & Support' },
  ];

  const quickActions = [
    { icon: '💳', label: 'Payer Loyer', color: 'from-indigo-400 to-purple-500' },
    { icon: '🔧', label: 'Maintenance', color: 'from-green-400 to-cyan-400' },
    { icon: '📄', label: 'Voir Contrat', color: 'from-orange-400 to-red-400' },
    { icon: '💰', label: 'Simuler Crédit', color: 'from-purple-400 to-indigo-500' },
    { icon: '👥', label: 'Forum', color: 'from-pink-400 to-rose-500' },
    { icon: '❓', label: 'Support', color: 'from-blue-400 to-indigo-600' },
  ];

  const services = [
    {
      icon: '💳',
      title: 'Paiement Loyer Janvier 2025',
      description: 'Appartement 3 pièces - Cocody Riviera',
      date: '15 Jan 2025',
      amount: '180.000 FCFA',
      status: 'Payé',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      icon: '🔧',
      title: 'Réparation Plomberie',
      description: 'Fuite robinet cuisine - Intervention d\'urgence',
      date: '28 Jan 2025',
      amount: '25.000 FCFA',
      status: 'En cours',
      statusColor: 'text-blue-600 bg-blue-50'
    },
    {
      icon: '📄',
      title: 'Renouvellement Contrat',
      description: 'Documents de renouvellement bail 2025',
      date: '20 Jan 2025',
      amount: 'Gratuit',
      status: 'En attente',
      statusColor: 'text-yellow-600 bg-yellow-50'
    }
  ];

  const payments = [
    {
      icon: '🏠',
      title: 'Loyer Février 2025',
      subtitle: 'Échéance: 15 Février',
      amount: '180.000 FCFA',
      urgency: 'due-soon'
    },
    {
      icon: '⚡',
      title: 'Charges Utilitaires',
      subtitle: 'Eau + Électricité + Internet',
      amount: '45.000 FCFA',
      urgency: 'due-ok'
    },
    {
      icon: '🔧',
      title: 'Maintenance Urgente',
      subtitle: 'Réparation plomberie',
      amount: '25.000 FCFA',
      urgency: 'due-urgent'
    }
  ];

  const notifications = [
    {
      icon: '💳',
      title: 'Rappel de Paiement',
      text: 'Votre loyer de février sera dû dans 10 jours',
      time: 'Il y a 2 heures',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: '🔧',
      title: 'Maintenance Programmée',
      text: 'Intervention plomberie prévue demain 14h',
      time: 'Il y a 5 heures',
      color: 'from-green-400 to-cyan-400'
    },
    {
      icon: '📄',
      title: 'Document Disponible',
      text: 'Votre quittance de janvier est prête',
      time: 'Il y a 1 jour',
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: '👥',
      title: 'Nouveau Message Forum',
      text: 'Réponse à votre question sur les charges',
      time: 'Il y a 2 jours',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-purple-600 overflow-hidden">
      {/* Sidebar */}
      <div className="w-auto md:w-48 lg:w-52 xl:w-56 bg-white shadow-xl flex flex-col border-r border-gray-200">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b  from-indigo-400 via-purple-400 to-purple-600 "></div>
        {/* Logo */}
       {/* Logo Section - Réduit */}
          <div className="flex items-center  gap-2 mb-3 p-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-white/20 to-transparent animate-pulse"></div>
              H
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                HABIPRO
              </div>
              <div className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider">
                Locataire
              </div>
            </div>
          </div>

        {/* Navigation */}
        <div className="flex-1 px-2 py-2 scrollbar-hide overflow-y-scroll">
          <div className="space-y-1">
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">
              Navigation
            </div>
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                 className={` w-full flex items-center p-2  rounded-lg mb-1 mr-1 transition-all duration-300 relative overflow-hidden group text-sm ${activeNav === item.id
                    ? 'text-red-500 bg-gradient-to-r from-red-50 to-orange-50 font-semibold transform translate-x-1 shadow-md'
                    : 'text-gray-700 hover:text-red-500 hover:transform hover:translate-x-1 hover:shadow-sm'
                    }`}
              >
               <div className="w-3 h-3 flex items-center justify-center text-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="font-medium relative z-10 ml-1.5 text-sm">{item.label}</span>
                {item.badge && (
                  <div className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-lg relative z-10">
                      {item.badge}
                    </div>
                )}
              </button>
            ))}

            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2 mt-6">
              Services
            </div>
            {navItems.slice(5, 9).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center text-sm p-2 rounded-lg mb-1 mr-2 text-gray-700 hover:text-red-500 hover:transform hover:translate-x-2 hover:shadow-sm transition-all duration-300 relative overflow-hidden group ${
                  activeNav === item.id
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                }`}
              >
                  <div className="w-4 h-4 flex items-center justify-center text-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="font-medium relative z-10 ml-2 ">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-gradient-to-r from-purple-400 to-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md relative z-10">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2 mt-6">
              Aide
            </div>
            {navItems.slice(9).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center text-sm p-2 rounded-lg mb-1 mr-2 text-gray-700 hover:text-red-500 hover:transform hover:translate-x-2 hover:shadow-sm transition-all duration-300 relative overflow-hidden group ${
                  activeNav === item.id
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center text-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="font-medium relative z-10 ml-2 ">{item.label}</span>
              </button>
            ))}
          </div>
        
         {/* Status Card */}
        <div className=" p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-md text-white text-center">
          <div className="font-bold text-sm mb-1">Locataire Actif</div>
          <div className="text-xs opacity-90 mb-3">Contrat en cours • À jour</div>
          <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs py-2 px-3 rounded-lg hover:bg-white/30 transition-all">
            Voir mon contrat
          </button>
        </div>
        
        </div>

       
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 shadow-sm p-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold mb-1 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Tableau de Bord Locataire
                </div>
              <div className="flex items-center space-x-2 text-sm text-indigo-600 font-medium mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Bienvenue • {currentTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <span className="text-gray-400 text-sm">🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-64"
                />
              </div>

              {/* Stats */}
              <div className="flex space-x-3">
                <div className="text-center p-2 bg-white border border-gray-200 rounded-md">
                  <div className="text-xs font-bold text-gray-900">180K</div>
                  <div className="text-xs text-gray-500">Loyer</div>
                </div>
                <div className="text-center p-2 bg-white border border-gray-200 rounded-lg">
                  <div className="text-xs font-bold text-gray-900">3</div>
                  <div className="text-xs text-gray-500">Pièces</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="relative w-10 h-10 bg-gray-100 hover:bg-indigo-500 hover:text-white rounded-lg flex items-center justify-center transition-all">
                  🔔
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">4</span>
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-indigo-500 hover:text-white rounded-lg flex items-center justify-center transition-all">
                  ⚙️
                </button>
              </div>

              {/* Balance */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded-lg text-center">
                <div className="text-xs opacity-80">Solde</div>
                <div className="text-xs font-bold">320K FCFA</div>
              </div>

              {/* User */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  KA
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Kader Adeniran</div>
                  <div className="text-xs text-indigo-600">Locataire Premium</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex p-2 space-x-2 overflow-y-auto">
          <div className="flex-1 space-y-2">
            {/* Overview Cards */}
            <div className="grid grid-cols-4 gap-1">
              <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg">
                    🏠
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full font-semibold">À jour</span>
                </div>
                <div className="text-md font-bold text-gray-900">180.000</div>
                <div className="text-xs text-gray-600">Loyer Mensuel (FCFA)</div>
              </div>

              <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg">
                    🔧
                  </div>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-semibold">1 cours</span>
                </div>
                <div className="text-md font-bold text-gray-900">2</div>
                <div className="text-xs text-gray-600">Demandes Maintenance</div>
              </div>

              <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white text-lg">
                    📄
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full font-semibold">Complètes</span>
                </div>
                <div className="text-md font-bold text-gray-900">12</div>
                <div className="text-xs text-gray-600">Documents Actifs</div>
              </div>

              <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white text-lg">
                    ⚠️
                  </div>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full font-semibold">Nouvelles</span>
                </div>
                <div className="text-md font-bold text-gray-900">3</div>
                <div className="text-xs text-gray-600">Notifications</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Actions Rapides</h2>
              <div className="grid grid-cols-6 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="group p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center text-white text-xl mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                      {action.icon}
                    </div>
                    <div className="text-xs font-semibold text-gray-700 text-center">{action.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Services */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between p-3 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">Historique des Services</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold">Voir tout →</button>
              </div>
              <div className="divide-y divide-gray-100">
                {services.map((service, index) => (
                  <div key={index} className="p-2 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">{service.title}</div>
                        <div className="text-xs text-gray-600">{service.description}</div>
                        <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                          <span>{service.date}</span>
                          <span>•</span>
                          <span>{service.amount}</span>
                        </div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${service.statusColor}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-80 space-y-4">
            {/* Payments */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-gray-900">Paiements en Attente</h3>
                <button className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center text-xs">⚙️</button>
              </div>
              
              <div className="space-y-3">
                {payments.map((payment, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {payment.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900 truncate">{payment.title}</div>
                      <div className="text-xs text-gray-600">{payment.subtitle}</div>
                      <div className="text-sm font-bold text-gray-900">{payment.amount}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      payment.urgency === 'due-urgent' ? 'bg-red-100 text-red-600' :
                      payment.urgency === 'due-soon' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {payment.urgency === 'due-urgent' ? 'Urgent' :
                       payment.urgency === 'due-soon' ? 'Bientôt' : '15 jours'}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-2  bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                Effectuer tous les paiements (250.000 FCFA)
              </button>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900">Notifications Récentes</h3>
                <button className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center text-xs">🔔</button>
              </div>

              <div className="space-y-3">
                {notifications.map((notif, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${notif.color} rounded-full flex items-center justify-center text-white text-sm flex-shrink-0`}>
                      {notif.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900">{notif.title}</div>
                      <div className="text-xs text-gray-600 leading-relaxed">{notif.text}</div>
                      <div className="text-xs text-gray-500 mt-1">{notif.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabiproTenantDashboard;