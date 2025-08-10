"use client";
import React, { useState, useEffect } from 'react';

export default function ProprietaireDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [searchValue, setSearchValue] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [revenueValue, setRevenueValue] = useState(2450000);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate revenue updates
  useEffect(() => {
    const revenueTimer = setInterval(() => {
      setRevenueValue(prev => prev + Math.floor(Math.random() * 1000));
    }, 30000);
    return () => clearInterval(revenueTimer);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
  };

  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Tableau de bord', active: true },
    { id: 'properties', icon: '🏢', label: 'Mes Propriétés', badge: '8' },
    { id: 'tenants', icon: '👥', label: 'Gestion Locataires', badge: '12' },
    { id: 'revenue', icon: '💰', label: 'Revenus & Paiements' },
    { id: 'contracts', icon: '📄', label: 'Contrats & Documents' },
  ];

  const serviceItems = [
    { id: 'evaluation', icon: '📈', label: 'Évaluation IA', premium: true },
    { id: 'providers', icon: '🛠️', label: 'Prestataires' },
    { id: 'messages', icon: '💬', label: 'Messages', badge: '5' },
    { id: 'advertising', icon: '📢', label: 'Publier Annonce' },
    { id: 'marketing', icon: '🎯', label: 'Marketing IA', premium: true },
  ];

  const adminItems = [
    { id: 'legal', icon: '⚖️', label: 'Base Réglementaire' },
    { id: 'public', icon: '🏛️', label: 'Services Publics' },
    { id: 'settings', icon: '⚙️', label: 'Paramètres' },
    { id: 'support', icon: '❓', label: 'Support Expert' },
  ];

  const quickActions = [
    { icon: '🏢', label: 'Ajouter Propriété', gradient: 'from-red-400 to-orange-400' },
    { icon: '👥', label: 'Nouveau Locataire', gradient: 'from-blue-400 to-blue-600' },
    { icon: '📄', label: 'Créer Contrat', gradient: 'from-green-400 to-teal-400' },
    { icon: '📈', label: 'Évaluation IA', gradient: 'from-purple-400 to-indigo-500' },
    { icon: '📢', label: 'Publier Annonce', gradient: 'from-yellow-400 to-orange-500' },
    { icon: '🛠️', label: 'Prestataires', gradient: 'from-blue-500 to-indigo-600' },
  ];

  const properties = [
    {
      id: 1,
      title: 'Appartement Cocody Riviera',
      type: '3 pièces',
      size: '85m²',
      rent: 280000,
      status: 'occupied',
      icon: '🏢'
    },
    {
      id: 2,
      title: 'Villa Angré 7ème Tranche',
      type: '5 pièces',
      size: '180m²',
      rent: 450000,
      status: 'occupied',
      icon: '🏠'
    },
    {
      id: 3,
      title: 'Studio Plateau Centre',
      type: '1 pièce',
      size: '35m²',
      rent: 120000,
      status: 'vacant',
      icon: '🏘️'
    },
  ];

  const tenants = [
    {
      id: 1,
      name: 'Kader Adeniran',
      initials: 'KA',
      property: 'Appartement Cocody Riviera',
      rent: 280000,
      status: 'active'
    },
    {
      id: 2,
      name: 'Marie Koné',
      initials: 'MK',
      property: 'Villa Angré',
      rent: 450000,
      status: 'active'
    },
    {
      id: 3,
      name: 'Jean Soro',
      initials: 'JS',
      property: 'Duplex Marcory',
      rent: 320000,
      status: 'pending'
    },
    {
      id: 4,
      name: 'Aminata Bamba',
      initials: 'AB',
      property: 'Appartement Yopougon',
      rent: 180000,
      status: 'active'
    },
  ];

  const notifications = [
    {
      id: 1,
      icon: '⚠️',
      title: 'Paiement en Retard',
      text: 'Jean Soro - Loyer janvier non payé',
      time: 'Il y a 2 jours',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Demande de Maintenance',
      text: 'Réparation plomberie - Villa Angré',
      time: 'Il y a 5 heures',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Paiement Reçu',
      text: 'Kader Adeniran - Loyer février',
      time: 'Il y a 1 jour',
      gradient: 'from-green-400 to-teal-400'
    },
    {
      id: 4,
      icon: '📈',
      title: 'Évaluation IA Disponible',
      text: 'Nouveau rapport pour Studio Plateau',
      time: 'Il y a 3 jours',
      gradient: 'from-purple-400 to-indigo-500'
    },
  ];

  const handleNavClick = (itemId) => {
    setActiveNav(itemId);
  };

  const handlePremiumClick = (feature) => {
    alert(`🚀 Fonctionnalité Premium: ${feature}\n\nAccès aux outils IA avancés pour l'analyse et l'optimisation de votre portefeuille immobilier.`);
  };

  const handlePropertyClick = (property) => {
    alert(`Ouverture des détails de ${property.title}...`);
  };

  const handleTenantClick = (tenant) => {
    alert(`Ouverture du profil de ${tenant.name}...`);
  };

  const handleNotificationClick = (notification) => {
    alert(`Action pour: ${notification.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-orange-500">
      <div className="flex w-full h-screen bg-gray-50">
        {/* Sidebar - Plus compact */}
        <div className="w-auto md:w-48 lg:w-52 xl:w-56 bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 flex flex-col p-2 shadow-xl relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-400 to-orange-500"></div>

          {/* Logo Section - Réduit */}
          <div className="flex items-center gap-2 mb-3 p-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-white/20 to-transparent animate-pulse"></div>
              H
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                HABIPRO
              </div>
              <div className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider">
                Propriétaire
              </div>
            </div>
          </div>

          <div className="overflow-y-auto scrollbar-hide flex-1">
            {/* Navigation - Plus compact */}
            <div className="flex-1">
              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 pl-2 relative">
                <div className="absolute left-0 top-1/2 w-1.5 h-0.5 bg-gradient-to-r from-red-400 to-orange-500 rounded-full"></div>
                Gestion Immobilière
              </div>

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex items-center p-2  rounded-lg mb-1 mr-1 transition-all duration-300 relative overflow-hidden group text-sm ${activeNav === item.id
                    ? 'text-red-500 bg-gradient-to-r from-red-50 to-orange-50 font-semibold transform translate-x-1 shadow-md'
                    : 'text-gray-700 hover:text-red-500 hover:transform hover:translate-x-1 hover:shadow-sm'
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="w-3 h-3 flex items-center justify-center text-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="font-medium relative z-10 ml-1.5 text-sm">{item.label}</span>
                  {item.badge && (
                    <div className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-lg relative z-10">
                      {item.badge}
                    </div>
                  )}
                </a>
              ))}

              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 pl-3 mt-6 relative">
                <div className="absolute left-0 top-1/2 w-2 h-0.5 bg-gradient-to-r from-red-400 to-orange-500 rounded-full"></div>
                Services & Outils
              </div>

              {serviceItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.premium) {
                      handlePremiumClick(item.label);
                    } else {
                      handleNavClick(item.id);
                    }
                  }}
                  className="flex items-center text-sm p-2 rounded-lg mb-1 mr-2 text-gray-700 hover:text-red-500 hover:transform hover:translate-x-2 hover:shadow-sm transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="w-4 h-4 flex items-center justify-center text-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="font-medium relative z-10 ml-2">{item.label}</span>
                  {item.premium && (
                    <div className="ml-auto bg-gradient-to-r from-purple-400 to-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md relative z-10">
                      PRO
                    </div>
                  )}
                  {item.badge && !item.premium && (
                    <div className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-lg relative z-10">
                      {item.badge}
                    </div>
                  )}
                </a>
              ))}

              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 pl-3 mt-6 relative">
                <div className="absolute left-0 top-1/2 w-2 h-0.5 bg-gradient-to-r from-red-400 to-orange-500 rounded-full"></div>
                Administration
              </div>

              {adminItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="flex items-center text-sm p-2 rounded-lg mb-1 mr-2 text-gray-700 hover:text-red-500 hover:transform hover:translate-x-2 hover:shadow-sm transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="w-4 h-4 flex items-center justify-center text-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="font-medium relative z-10 ml-2">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Status Card - Plus compact */}
            <div className="bg-gradient-to-br from-red-400 to-orange-500 rounded-lg p-2.5 text-center text-white shadow-lg relative overflow-hidden mt-3">
              <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-white/15 to-transparent animate-pulse"></div>
              <div className="text-sm font-bold mb-1 relative z-10">Premium</div>
              <div className="text-xs opacity-90 mb-2 relative z-10">8 propriétés • 12 locataires</div>
              <button
                onClick={() => alert('Interface de gestion avancée à implémenter')}
                className="bg-white/25 backdrop-blur-sm border border-white/30 px-2 py-1 rounded-md text-white font-semibold text-sm transition-all duration-300 hover:bg-white/35 hover:-translate-y-1 hover:shadow-md relative z-10"
              >
                Gestion avancée
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Header - Tailles corrigées */}
          <div className="bg-white border-b border-gray-200 p-3 shadow-sm relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-500 opacity-10"></div>
            <div className="flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-sm font-bold mb-1 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Tableau de Bord Propriétaire
                </div>
                <div className="text-red-500 font-semibold flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div>Gestion de portefeuille immobilier</div>
                    <div>{currentTime.toLocaleTimeString('fr-FR')}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Search Box - Plus compact */}
                <div className="relative w-50">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                    🔍
                  </div>
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={`w-full pl-9 pr-3 py-2 border-2 border-gray-200 rounded-lg text-sm outline-none transition-all duration-300 font-medium ${isSearchFocused ? 'border-red-400 shadow-lg bg-white transform scale-105' : 'bg-gray-50'
                      }`}
                    placeholder="Rechercher..."
                  />
                </div>

                {/* Quick Stats - Plus compacts */}
                <div className="flex gap-1 ">
                  <div className="flex flex-col items-center p-2 bg-white rounded-lg border border-gray-200 min-w-[50px] hover:transform hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="text-sm font-bold text-gray-900">8</div>
                    <div className="text-[8px] text-gray-500 font-semibold uppercase tracking-wider">Propriétés</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-lg border border-gray-200 min-w-[60px] hover:transform hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="text-sm font-bold text-gray-900">12</div>
                    <div className="text-[8px] text-gray-500 font-semibold uppercase tracking-wider">Locataires</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-lg border border-gray-200 min-w-[60px] hover:transform hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="text-sm font-bold text-gray-900">95%</div>
                    <div className="text-[8px] text-gray-500 font-semibold uppercase tracking-wider">Occupation</div>
                  </div>
                </div>

                {/* Action Buttons - Plus petits */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white hover:transform hover:-translate-y-1 hover:shadow-lg text-sm relative">
                    🔔
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                      7
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white hover:transform hover:-translate-y-1 hover:shadow-lg text-sm">
                    ⚙️
                  </div>
                </div>

                {/* Revenue Card - Plus compact */}
                <div className="bg-gradient-to-br from-green-400 to-teal-400 px-2 py-1 rounded-lg text-white font-bold shadow-lg flex flex-col items-center gap-0.5">
                  <div className="text-[8px] opacity-80 uppercase tracking-wider">Revenus Mensuels</div>
                  <div className="text-[10px]">{formatCurrency(revenueValue)}</div>
                </div>

                {/* User Info - Plus compact */}
                <div className="flex items-center gap-2 p-2 pr-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="w-7 h-7 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    AB
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-gray-900 text-xs">Ahmed Bakayoko</div>
                    <div className="text-red-500 text-[9px] font-semibold">Propriétaire Premium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Padding réduit */}
          <div className="flex-1 flex p-4 gap-4 overflow-y-auto">
            <div className="flex-1">
              {/* Dashboard Overview Cards - Plus compactes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                <div className="bg-white p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-teal-400"></div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center text-white text-lg">
                      💰
                    </div>
                    <div className="text-[9px] font-semibold px-1.5 py-0.5 bg-green-100 text-green-600 rounded-full flex items-center gap-1">
                      ↗ +12%
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">2.45M</div>
                  <div className="text-xs text-gray-500 font-semibold">Revenus Mensuels (FCFA)</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-500"></div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-lg">
                      🏢
                    </div>
                    <div className="text-[9px] font-semibold px-1.5 py-0.5 bg-green-100 text-green-600 rounded-full flex items-center gap-1">
                      ↗ +1 nouveau
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
                  <div className="text-xs text-gray-500 font-semibold">Propriétés Gérées</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-lg">
                      👥
                    </div>
                    <div className="text-[9px] font-semibold px-1.5 py-0.5 bg-green-100 text-green-600 rounded-full flex items-center gap-1">
                      ↗ 95% occupation
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
                  <div className="text-xs text-gray-500 font-semibold">Locataires Actifs</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-lg">
                      🔧
                    </div>
                    <div className="text-[9px] font-semibold px-1.5 py-0.5 bg-red-100 text-red-600 rounded-full flex items-center gap-1">
                      ↙ 3 en cours
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
                  <div className="text-xs text-gray-500 font-semibold">Demandes Maintenance</div>
                </div>
              </div>

              {/* Quick Actions - Plus compactes */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold text-gray-900">Actions Rapides</div>
                  <a href="#" className="text-red-500 text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
                    Voir toutes →
                  </a>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      onClick={() => alert(`Action: ${action.label}`)}
                      className="flex flex-col items-center gap-3 p-4 bg-white border-2 border-gray-100 rounded-xl cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-red-400 relative overflow-hidden group"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      <div className={`w-10 h-10 bg-gradient-to-br ${action.gradient} rounded-lg flex items-center justify-center text-white text-xl transition-transform duration-300 group-hover:scale-110`}>
                        {action.icon}
                      </div>
                      <div className="text-xs font-bold text-gray-900 text-center">{action.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Properties Section - Plus compact */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <div className="text-xl font-bold text-gray-900">Mes Propriétés</div>
                  <button
                    onClick={() => alert('Formulaire d\'ajout de propriété à implémenter')}
                    className="bg-gradient-to-r from-red-400 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg text-sm"
                  >
                    + Ajouter Propriété
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      onClick={() => handlePropertyClick(property)}
                      className="bg-gray-50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-md border border-gray-200"
                    >
                      <div className="w-full h-28 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white text-3xl">
                        {property.icon}
                      </div>
                      <div className="p-4">
                        <div className="text-base font-bold text-gray-900 mb-1">{property.title}</div>
                        <div className="flex justify-between mb-3 text-xs text-gray-500">
                          <span>{property.type}</span>
                          <span>{property.size}</span>
                        </div>
                        <div className="text-base font-bold text-green-600 mb-2">
                          {formatCurrency(property.rent)}/mois
                        </div>
                        <div className={`inline-block px-2 py-1 rounded-full text-[10px] font-semibold uppercase ${property.status === 'occupied'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-yellow-100 text-yellow-600'
                          }`}>
                          {property.status === 'occupied' ? 'Occupé' : 'Vacant'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Plus compact */}
            <div className="w-72 flex flex-col gap-4">
              {/* Revenue Analysis - Plus compact */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold text-gray-900">Analyse des Revenus</div>
                  <div className="w-7 h-7 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white text-sm">
                    📊
                  </div>
                </div>

                <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-xs mb-4 text-center">
                  📈 Graphique des revenus mensuels
                  <br />
                  <small>Intégration prochaine avec Chart.js</small>
                </div>

                <div className="flex justify-between">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">2.45M</div>
                    <div className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider">Ce mois</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">2.18M</div>
                    <div className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider">Mois dernier</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">+12%</div>
                    <div className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider">Croissance</div>
                  </div>
                </div>
              </div>

              {/* Active Tenants - Plus compact */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold text-gray-900">Locataires Actifs</div>
                  <div className="w-7 h-7 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white text-sm">
                    👥
                  </div>
                </div>

                <div className="space-y-0">
                  {tenants.map((tenant) => (
                    <div
                      key={tenant.id}
                      onClick={() => handleTenantClick(tenant)}
                      className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-b-0 cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:-mx-4 hover:px-4 hover:rounded-lg"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {tenant.initials}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-0.5">{tenant.name}</div>
                        <div className="text-xs text-gray-500 mb-1">{tenant.property}</div>
                        <div className="text-xs font-semibold text-green-600">{formatCurrency(tenant.rent)}/mois</div>
                      </div>
                      <div className={`text-[9px] px-1.5 py-0.5 rounded-lg font-semibold uppercase ${tenant.status === 'active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-yellow-100 text-yellow-600'
                        }`}>
                        {tenant.status === 'active' ? 'Actif' : 'En retard'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notifications - Plus compact */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold text-gray-900">Notifications & Alertes</div>
                  <div className="w-7 h-7 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white text-sm">
                    🔔
                  </div>
                </div>

                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:transform hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${notification.gradient} rounded-lg flex items-center justify-center text-white text-sm`}>
                        {notification.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-0.5">{notification.title}</div>
                        <div className="text-xs text-gray-600 mb-1">{notification.text}</div>
                        <div className="text-[10px] text-gray-500 font-semibold">{notification.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
