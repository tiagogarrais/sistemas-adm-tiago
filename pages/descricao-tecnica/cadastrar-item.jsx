import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

export default function CadastrarItem() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <h2>Cadastrar novo item</h2>
      </div>
    )
  }

  return (
    <div>
      <p>Acesso negado, faça login para ver este conteúdo</p>
    </div>
  )
}
