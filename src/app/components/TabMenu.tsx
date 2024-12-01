import { useState } from 'react'

interface Tab {
  label: string
  content: React.ReactNode
}

interface TabMenuProps {
  tabs: Tab[]
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${activeTab === index ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default TabMenu

