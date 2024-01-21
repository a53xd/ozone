'use client'

import { CommunicationTemplateForm } from 'components/communication-template/form'

export default function CommunicationTemplateCreatePage() {
  return (
    <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
      <h2 className="text-gray-600 font-semibold mb-3 pb-2 mt-4 border-b border-gray-300">
        Create New Template
      </h2>
      <CommunicationTemplateForm />
    </div>
  )
}
