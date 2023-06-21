// Interfaz que define el comportamiento común de los estados
interface State {
    handle(context: Context): void; //realiza una acción específica del estado
  }
  
  // Implementación concreta del estado "EstadoA"
  class StateA implements State {
    handle(context: Context): void {
      console.log("Manejando el Estado A.");
      // Transición al siguiente estado
      context.setState(new StateB());//setState para cambiar el estado actual 
    }
  }
  
  // Implementación concreta del estado "EstadoB"
  class StateB implements State {
    handle(context: Context): void {
      console.log("Manejando el Estado B.");
      // Transición al siguiente estado
      context.setState(new StateC());
    }
  }
  
  // Implementación concreta del estado "EstadoC"
  class StateC implements State {
    handle(context: Context): void {
      console.log("Manejando el Estado C.");
      // Transición al siguiente estado
      context.setState(new StateA());
    }
  }
  
  // Contexto que utiliza los estados
  class Context {
    private state: State;
  
    constructor() {
      // Estado inicial
      this.state = new StateA();
    }
  
    setState(state: State): void {
      this.state = state;
    }
  
    // Método que invoca el comportamiento del estado actual
    request(): void {
      this.state.handle(this);
    }
  }
  
  // Uso del patrón State
  const context = new Context();
  
  // Realizar algunas solicitudes para demostrar el cambio de estado
  context.request();
  context.request();
  context.request();
  